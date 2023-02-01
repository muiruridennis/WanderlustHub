import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import User from "../users/entity/user.entity";
import Tour from "../tour/entity/tour.entity";
import Review from './entity/review.entity';
import ReviewDto from "./dto/review.dto"


@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review) private readonly reviewRepository: Repository<Review>
    ) { }

    async createReview(review: ReviewDto, user: User, tour: Tour ) {
        const newReview = await this.reviewRepository.create({
            ...review,
            reviewer: user,
            tour: tour
        })
        await this.reviewRepository.save(newReview);
        return newReview;
    }
}
