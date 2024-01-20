import { Module } from '@nestjs/common';
import { TourController } from './tour.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TourService } from './tour.service';
import Tour from './entity/tour.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tour])],
  controllers: [TourController],
  providers: [TourService],
  exports: [TourService]
})
export class TourModule {}
