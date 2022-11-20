import { Controller, Get, Post,  Param, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import RequestWithUser from "../auth/requestWithUser.interface";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Get("all")
  async getUsers() {
    const users = await this.usersService.getAllUsers();
    return users
  };

  @Get(":id")
  async getUserById(@Param() id: number) {
    const user = await this.usersService.getById(id);
    return user
  }

  @Post('avatar')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  // The parameter for @FileInterceptor() must match the name of 
  // the name of the field . Otherwise Nest returns 400 Unexpected field
  async addAvatar(@Req() request: RequestWithUser, @UploadedFile() file: Express.Multer.File) {
    return this.usersService.addAvatar(request.user.id, file.buffer, file.originalname);
  }
}