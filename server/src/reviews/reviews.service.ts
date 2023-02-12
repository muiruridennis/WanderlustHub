import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import User from "../users/entity/user.entity";
import Review from './entity/review.entity';
import ReviewDto from "./dto/review.dto";
import { TourService } from "../tour/tour.service";


@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private readonly reviewRepository: Repository<Review>,
        private readonly tourService: TourService
    ) { }

    async getById(id: number) {
        const review = await this.reviewRepository.findOneBy({ id });
        if (review) {
            return review;
        }
    }
    async createReview(review: ReviewDto, user: User, tourId: number) {
        const tour = await this.tourService.getById(tourId);

        const newReview = await this.reviewRepository.create({
            ...review,
            reviewer: user,
            tour
        })
        await this.reviewRepository.save(newReview);
        return tour;
    }

    async allReviews() {
        const allReviews = this.reviewRepository.find(
            {
                relations: ["reviewer"]
            }
        )
        return allReviews
    }

    async deleteReview(id: number) {
        await this.getById(id)
        await this.reviewRepository.delete(id)
        return { message: "Deleted successfully!" }
    }
}
