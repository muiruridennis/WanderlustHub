import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {DestinationRepository} from './destination-repository';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateDestinationDto} from './models/create-destination.Dto'


@Injectable()
export class DestinationsService {
    constructor(
        @InjectRepository(DestinationRepository)
        private readonly destinationRepository: DestinationRepository
    ){}

    async createDestination (destinationDetails: CreateDestinationDto) {
        const destination = await this.destinationRepository.create(destinationDetails)
        await this.destinationRepository.save(destination);
        return destination;
    }

    async getAllTours (){
        const allTours = await this.destinationRepository.find();
        return allTours
    }
    async deleteTour(id: number) {
        const tourToDelete = await this.destinationRepository.delete(id);
        return {tourToDelete, Message: "Tour deleted successfully"};

    }
    async updateTourDetails(id : number, detailsToUpdate: CreateDestinationDto) {
        const tourToUpdate = await this.destinationRepository.findOne(id);
        if (!tourToUpdate) {
            throw new HttpException(`Tour with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        const updatedTourtDetails = await this.destinationRepository.save( detailsToUpdate);
        return {updatedTourtDetails, Message: "Tour updated successfully"};  

    };

}
