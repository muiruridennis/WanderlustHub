import { Controller, Post, ClassSerializerInterceptor, UseInterceptors, Body, Req,  HttpCode, UseGuards, Get, Res } from '@nestjs/common';
import { CreateUserDto } from "../users/models/createUserDto";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import RequestWithUser from "./requestWithUser.interface";
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';
import { UsersService } from '../users/users.service'
import JwtRefreshGuard from "./guards/jwt-refresh.guard ";
import { Response } from 'express';


@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(
        private AuthService: AuthService, private usersService: UsersService) { };
    @HttpCode(200) // we use  @HttpCode(200) because NestJS responds with 201 Created for POST requests by default
    @UseGuards(LocalAuthenticationGuard)
    @Post('login')
    async logIn(@Req() request: RequestWithUser) {
        const { user } = request;
        const accessTokenCookie = this.AuthService.getCookieWithJwtAccessToken(user.id);
        const {
            cookie: refreshTokenCookie,
            token: refreshToken
        } = this.AuthService.getCookieWithJwtRefreshToken(user.id);

        await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

       request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
        return {user, message: "User logged in successfully"};
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    @HttpCode(200)
    async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
        await this.usersService.removeRefreshToken(request.user.id);
        request.res.setHeader('Set-Cookie', this.AuthService.getCookiesForLogOut());
        response.send({msg:"logged out successfully"})
    }


    @Post('register')
    async register(@Body() registrationData: CreateUserDto) {
        return this.AuthService.register(registrationData);
    };

    @UseGuards(JwtAuthGuard)
    @Get("loggeduser")
    authenticate(@Req() request: RequestWithUser) {
        const user = request.user;
        user.password = undefined;
        return user;
    }
    // /refresh endpoint
    @UseGuards(JwtRefreshGuard)
    @Get('refresh')
    refresh(@Req() request: RequestWithUser) {
        const accessTokenCookie = this.AuthService.getCookieWithJwtAccessToken(request.user.id);

        request.res.setHeader('Set-Cookie', accessTokenCookie);
        return request.user;
    };
};
// Refresh Token Flow:
// Refresh Token is a random string key that will be created along with the JWT access token and return to the 
//valid client on successful logging in. Now for all subsequent requests will use the access token, 
//but the access token is a short-lived token whereas the refresh token lives more time than the access token.
// On the expiration of the access token, the user instead of authenticating himself again passing his user name
// and password, the user can send the refresh token.The server on receiving a refresh token first validates 
//against the storage(database, cache, etc).For a valid refresh token server will create a new access token and
// refresh token(like when authenticate using user name and password) return it to the user.