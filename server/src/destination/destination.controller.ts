import { Controller, Get, Post, Put, Req, Delete, Param, Body, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { DestinationService } from './destination.service';
import Destination from './entity/destination.entity';
import CreateDestinationDto from './CreateDestinationDto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { JwtAuthenticationGuard  } from '../auth/guards/jwt-auth.guard';
import RequestWithUser from "../auth/requestWithUser.interface";

@Controller('destination')
export class DestinationController {
    constructor(private readonly destinationService: DestinationService) { }

    @Get()
    getAllDestinations(): Promise<Destination[]> {
        return this.destinationService.getAllDestinations();
    }

    @Get(':id')
    getDestinationById(@Param('id') id: number): Promise<Destination> {
        return this.destinationService.getDestinationById(id);
    }

    @Post()
    createDestination(@Body() destinationData: CreateDestinationDto) {
        return this.destinationService.createDestination(destinationData);
    }

    @Put(':id')
    updateDestination(@Param('id') id: number, @Body() destinationData: Partial<Destination>): Promise<Destination> {
        return this.destinationService.updateDestination(id, destinationData);
    }

    @Delete(':id')
    deleteDestination(@Param('id') id: number): Promise<void> {
        return this.destinationService.deleteDestination(id);
    }
    // @UseGuards(JwtAuthenticationGuard )
    @Post(':id/image') 
    @UseInterceptors(FileInterceptor('file'))
    async addImage(
      @Param('id') destinationId: number,
      @UploadedFile() file: Express.Multer.File,
    ) {
      return this.destinationService.addImage(destinationId, file.buffer, file.originalname);
    }
}
