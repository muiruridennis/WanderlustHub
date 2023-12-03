import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Tour from './entity/tour.entity';
import { Repository, LessThan } from 'typeorm';
import CreateTourDto from './dtos/createTour.dto';
import UpdateTourDto from './dtos/updateTour.dto';

@Injectable()
export class TourService {

    constructor(
        @InjectRepository(Tour)
        private tourRepository: Repository<Tour>,
    ) { }
    
    async getById(id: number) {
        const tour = await this.tourRepository.findOneBy({ id })
        if (tour) {
            return tour;
        }
        throw new HttpException(
            `Tour with  id ${id} does not exist`,
            HttpStatus.NOT_FOUND
        );
    }
   
    async createTour(tour: CreateTourDto) {
        const newTour = await this.tourRepository.create(tour)
        await this.tourRepository.save(newTour)
        return newTour
    }

    async updateTour(tour: UpdateTourDto, id: number,) {
        const updateTour = this.getById(id)
        await this.tourRepository.update(id, tour)
        return updateTour
    }

    async deleteTour(id: number) {
        const tour = this.getById(id)
        await this.tourRepository.delete(id)
        return tour
    }

    async getAllTours() {
        const allTour = await this.tourRepository.find();
        return allTour
    }

    async topFive() {
        const tours = await this.tourRepository.find(
            {
                where: {
                    price: LessThan(5000)
                },
            }
        )
        if (tours) {
            return tours;
        }
        throw new HttpException(
            'tours not found',
            HttpStatus.NOT_FOUND
        );
    }
}
