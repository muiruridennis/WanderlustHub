import { Controller, Get, Patch, Param, Body, Post, Delete } from '@nestjs/common';
import { TourService } from './tour.service';
import UpdateTourDto from './dtos/updateTour.dto';
import CreateTourDto from './dtos/createTour.dto';


@Controller('tours')
export class TourController {
    constructor(private readonly tourService: TourService) { }

    @Get("all")
    async allTours() {
        const allTours = await this.tourService.getAllTours();
        return allTours
    }

    @Patch("update/:id")
    async updateTour(@Body() update: UpdateTourDto, @Param("id") id: number) {
        await this.tourService.updateTour(update, id);
        return "Tour updated successfully!"
    }

    @Post("create")
    async createTour(@Body() create: CreateTourDto) {
        return await this.tourService.createTour(create);
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number) {
        let tour = await this.tourService.deleteTour(id)
        return tour
    }

    @Get("topFive")
    async topFive() {
        let topFive = await this.tourService.topFive()
        return topFive
    }
  
}
