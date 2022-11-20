import { Controller, Post, Get, Param, Patch, Body, Delete } from '@nestjs/common';
import { DestinationsService } from './destinations.service'; 
import {CreateDestinationDto} from "./models/create-destination.Dto"

@Controller('destinations')
export class DestinationsController {
    constructor(private destinationsService: DestinationsService) {}
    @Post("create")
    async  createDestination(@Body() destinationDetails : CreateDestinationDto) {
        const newDestination = await this.destinationsService.createDestination(destinationDetails);
        return newDestination;
        
    }
    @Get("alldestinations")
    async allDestinations(){
        const allTours = await this.destinationsService.getAllTours();
        return allTours;
    }
    @Delete("delete/:id")
    async deleteTour(@Param("id") id: number) {
        let tourToDelete = await this.destinationsService.deleteTour(id)
        return tourToDelete
    }
    @Patch("update/:id")
    async updateTourDetails(@Param("id") id: number, @Body() clientDetails: CreateDestinationDto) {
        const updatedTour = await this.destinationsService.updateTourDetails(id, clientDetails);
        return updatedTour;
    }

}
