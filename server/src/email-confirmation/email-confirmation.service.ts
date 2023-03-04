import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import VerificationTokenPayload from './verificationTokenPayload.interface';
import EmailService from '../email/email.service';
import { UsersService } from '../users/users.service';
import FeatureFlagsService from '../feature-flags/feature-flags.service';


@Injectable()
export class EmailConfirmationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly usersService: UsersService,
    private readonly featureFlagsService: FeatureFlagsService,
  ) { }

  private isEnabled() {
    return this.featureFlagsService.isEnabled('email-confirmation');
  }

  public async sendVerificationLink(email: string) {
    if (!(await this.isEnabled())) {
      return "Can not send Email. Feature flag is disabled.";
    }
    const payload: VerificationTokenPayload = { email };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
      expiresIn: `${this.configService.get(
        'JWT_VERIFICATION_TOKEN_EXPIRATION_TIME',
      )}s`,
    });

    const url = `${this.configService.get(
      'FRONTEND_URL',
    )}/auth/confirmEmail/${token}`;

    const text = `Welcome to the application. To confirm the email address, click here: ${url}`;

    return this.emailService.sendMail({
      to: email,
      subject: 'Email confirmation',
      text,
    });
  }

  public async resendConfirmationLink(userId: number) {
    if (!(await this.isEnabled())) {
      return "Can not confirm Email. Feature flag is disabled.";
    }
    const user = await this.usersService.getById(userId);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.sendVerificationLink(user.email);
  }

  public async confirmEmail(email: string) {
    if (!(await this.isEnabled())) {
      return;
    }
    const user = await this.usersService.getByEmail(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.usersService.markEmailAsConfirmed(email);
    return "email confirmed successfully"
  }

  public async decodeConfirmationToken(token: string) {
    if (!(await this.isEnabled())) {
      return;
    }
    try {
      const payload = await this.jwtService.verify(token, {
        secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
      });

      if (typeof payload === 'object' && 'email' in payload) {
        return payload.email;
      }
      throw new BadRequestException();
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email confirmation token expired');
      }
      throw new BadRequestException('Bad confirmation token');
    }
  }
}
