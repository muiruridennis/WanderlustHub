import {
    Controller, Post, ClassSerializerInterceptor, UseInterceptors,
    Body, Req, HttpCode, UseGuards, Get, Res, Patch, SerializeOptions
}
    from '@nestjs/common';
import { RegisterUserstDTO } from "./dto/register-user.dto";
import { ResetPasswordDto } from "./dto/resetPassword.dto";
import { EmailConfirmationService } from "../email-confirmation/email-confirmation.service"
import { AuthService } from "./auth.service";
import { JwtAuthenticationGuard } from './guards/jwt-auth.guard';
import RequestWithUser from "./requestWithUser.interface";
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';
import { UsersService } from '../users/users.service'
import JwtRefreshGuard from "./guards/jwt-refresh.guard ";
import { Response } from 'express';
import { RecoverPasswordDto } from './dto/recoverPassword.dto';


@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
        private readonly emailConfirmationService: EmailConfirmationService,

    ) { }

    @Post('register')
    async register(@Body() registrationData: RegisterUserstDTO) {
        const user = await this.authService.register(registrationData);
        await this.emailConfirmationService.sendVerificationLink(
            registrationData.email,
        );
        return user;
    };

    @HttpCode(200) // we use  @HttpCode(200) because NestJS responds with 201 Created for POST requests by default
    @UseGuards(LocalAuthenticationGuard)
    @Post('login')
    async logIn(@Req() request: RequestWithUser) {
        const { user } = request;
        const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(user.id);
        const {
            cookie: refreshTokenCookie,
            token: refreshToken
        } = this.authService.getCookieWithJwtRefreshToken(user.id);

        await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

        request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
        return { user, message: "Login successful" };
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post('logout')
    @HttpCode(200)
    async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
        await this.usersService.removeRefreshToken(request.user.id);
        request.res.setHeader('Set-Cookie', this.authService.getCookiesForLogOut());
        response.send({ logoutMessage: "logged out successfully" })
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get("/currentuser")
    authenticate(@Req() request: RequestWithUser) {
        return request.user;
    }

    @UseGuards(JwtRefreshGuard)
    @Get('refresh-token')
    refresh(@Req() request: RequestWithUser) {
        const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(request.user.id);

        request.res.setHeader('Set-Cookie', accessTokenCookie);
        return request.user;
    };

    @Post('/recoverPassword')
    async recoverPassword(@Body() recoverPasswordDto: RecoverPasswordDto) {
        await this.authService.recoverPassword(recoverPasswordDto);

    }
    @Patch('/resetPassword')
    async resetPassword(@Body() resetDetails: ResetPasswordDto) {
        return this.authService.resetPassord(resetDetails);
    }
};




// Refresh Token Flow:
// Refresh Token is a random string key that will be created along with the JWT access token and return to the
//valid client on successful logging in. Now for all subsequent requests will use the access token,
//but the access token is a short-lived token whereas the refresh token lives more time than the access token.
// On the expiration of the access token, the user instead of authenticating himself again passing his user name
// and password, the user can send the refresh token.The server on receiving a refresh token first validates
//against the storage(database, cache, etc).For a valid refresh token server will create a new access token and
// refresh token(like when authenticate using user name and password) return it to the user.