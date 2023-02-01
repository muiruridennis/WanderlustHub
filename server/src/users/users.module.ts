import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import {AuthModule} from "../auth/auth.module";
import {LocalFileModule} from "../local-file/local-file.module"
import User from './entity/user.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
     LocalFileModule,
    ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
