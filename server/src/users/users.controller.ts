import { Controller, Get, Patch, Param, Delete, Body, } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthenticationGuard  } from "../auth/guards/jwt-auth.guard";
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import RequestWithUser from "../auth/requestWithUser.interface";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get("all")
  // @UseGuards(JwtAuthenticationGuard )
  async getUsers() {
    const users = await this.usersService.getAllUsers();
    return users
  };

  @Get(":id")
  async getUserById(@Param("id") id: number) {
    const user = await this.usersService.getById(id);
    return user
  }

  @Delete("delete/:id")
  async delete(@Param("id") id: number) {
    let user = await this.usersService.remove(id)
    return user
  }

 
  @Patch('/:id')
  async updateNotificationPreferences(
    @Param('id') userId: number,
    @Body() updates: any[],
  ) {
      const user = await this.usersService.updateNotificationPreferences(userId, updates);
      return user;
    
  }
}
