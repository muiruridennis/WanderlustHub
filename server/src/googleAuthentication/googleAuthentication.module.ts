import { Module } from '@nestjs/common';
import { GoogleAuthenticationController } from './googleAuthentication.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { GoogleAuthenticationService } from './googleAuthentication.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [ConfigModule, UsersModule, AuthModule],
  providers: [GoogleAuthenticationService],
  controllers: [GoogleAuthenticationController],
  exports: [],
})
export class GoogleAuthenticationModule {}