import { Inject, Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import EmailOptions from './emailOptions.interface';
import { EMAIL_CONFIG_OPTIONS } from './email.module-definition';

@Injectable()
export default class EmailService {
  private nodemailerTransport: Mail;

  constructor(@Inject(EMAIL_CONFIG_OPTIONS)
  private options: EmailOptions) {
    this.nodemailerTransport = createTransport({
      service: options.service,
      auth: {
        user: options.user,
        pass: options.password,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  sendMail(options: Mail.Options) {
    return this.nodemailerTransport.sendMail(options, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ', info);
      }
    });
  }
}
