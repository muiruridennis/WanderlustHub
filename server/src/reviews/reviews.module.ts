import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { UsersModule } from "../users/users.module";
import { TourModule } from "../tour/tour.module";
import Review from './entity/review.entity';
import { TourService } from "../tour/tour.service";
import Tour from "../tour/entity/tour.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Review, Tour]), UsersModule, TourModule],
  controllers: [ReviewsController],
  providers: [ReviewsService, TourService]
})
export class ReviewsModule { }
