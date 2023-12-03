import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalFileModule } from "../local-file/local-file.module"
import User from './entity/user.entity';
import { Profile } from "./entity/profile.entity";
import Address from "./entity/address.entity";
import NotificationPreference from './entity/notificationPreference.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User,NotificationPreference , Profile, Address]),
    LocalFileModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
