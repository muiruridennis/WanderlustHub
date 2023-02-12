import { Body, Controller, Get, Post, Req, UseGuards, Delete, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import Tour from "../tour/entity/tour.entity";
import CreateReviewDto from "./dto/review.dto";
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import RequestWithUser from "../auth/requestWithUser.interface";
@Controller('reviews')
export class ReviewsController {
    constructor(
        private readonly reviewsService: ReviewsService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post("create")
    async createReview(@Body() review: CreateReviewDto, @Req() req: RequestWithUser, tourId: number) {
        const newReview = await this.reviewsService.createReview(review, req.user, tourId)
        return newReview
    }

    @Get("all")
    async getAll() {
        return await this.reviewsService.allReviews()
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    async remove(@Param("id") id: number) {
        await this.reviewsService.deleteReview(id)
        return "Deleted Successfully"
    }

}
