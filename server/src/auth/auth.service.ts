import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { RegisterUserstDTO } from "./models/register-user.dto";
// import { LoginUserDto } from "../users/dto/LoginUserDto"
import * as bcrypt from "bcrypt";
import { PostgresErrorCode } from "./postgresErrorCodes.enum";
import { TokenPayload } from "./tokenPayload.interface";
import { ConfigService } from "@nestjs/config"

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) { }

    public async register(registrationData: RegisterUserstDTO) {

        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {           
            if (registrationData.password !== registrationData.confirmPassword) {
            throw new HttpException('Passwords does not match', HttpStatus.BAD_REQUEST);}
 
            const createdUser = await this.usersService.createNewUser({
                ...registrationData,
                password: hashedPassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            if (error?.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
            
        }
    }
    //To be used in local strategy
    public async getAuthenticatedUser(email: string, plainTextPassword: string) {
        try {
            const user = await this.usersService.getByEmail(email);
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    };

    private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const passwordIsMatching = await bcrypt.compare(
            plainTextPassword,
            hashedPassword
        );
        if (!passwordIsMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    public getCookieWithJwtToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload);
        // The possibility to provide the secret while calling the  jwtService.sign method has been added in the  7.1.0  version of  @nestjs/jwt
        return (
            `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('TOKEN_EXPIRATION_TIME')}`
        )
    }

    public getCookieWithJwtAccessToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: `${this.configService.get('TOKEN_EXPIRATION_TIME')}s`
        });
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('TOKEN_EXPIRATION_TIME')}`;
    }

    public getCookieWithJwtRefreshToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: `${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`
        });
        const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}`;
        return { cookie, token }
    }
    //A method that generates cookies to clear both the access token and the refresh token
    public getCookiesForLogOut() {
        return [
            'Authentication=; HttpOnly; Path=/; Max-Age=0',
            'Refresh=; HttpOnly; Path=/; Max-Age=0'
        ];
    }

}
