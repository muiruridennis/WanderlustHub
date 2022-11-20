import { Controller, Put, Patch, Get, Post, Delete, Param, Req, Body, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import {DirectorsService} from "./directors.service";
import { Request } from 'express';
import { CreateDirectorDto } from "./models/create-director-Dto";
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Multer } from "multer";
import RequestWithUser from "../auth/requestWithUser.interface";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";



@Controller('directors')
export class DirectorsController {
    constructor(private readonly directorservice: DirectorsService) {}
    
    @Post('create')
    async createNewDirector(@Body() directorDetails: CreateDirectorDto, @Req() request: Request) {
        const newDrector = await this.directorservice.createNewDirector(directorDetails, request);
        return newDrector;
    }

    @Patch("update/:id")
    async updateDirectorDetails(@Param("id") id: number, @Body() directorDetails: CreateDirectorDto) {
        const updatedDirector = await this.directorservice.updateDirectorDetails(id, directorDetails);
        return updatedDirector;
    }

    @Get("alldirectors")
    async getAllClient() {
        const directors = await this.directorservice.getAllDirectors();
        return directors;
    }
    @Delete("delete/:id")
    async deleteDirector(@Param("id") id: number) {
        let directorToDelete = await this.directorservice.deleteDirector(id)
        return directorToDelete
    }

    // @Post('avatar')
    // @UseGuards(JwtAuthGuard)
    // @UseInterceptors(FileInterceptor('file'))
    // async addAvatar(@Req() request: RequestWithUser, @UploadedFile() file: Multer.File) {
    //   return this.directorservice.addAvatar(request.user.id, file.buffer, file.originalname);
    // }
}
