import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Destination from './entity/destination.entity';
import CreateDestinationDto from './CreateDestinationDto';
import { LocalFilesService } from "../local-file/local-file.service";

@Injectable()
export class DestinationService {
  constructor(
    @InjectRepository(Destination)
    private readonly destinationRepository: Repository<Destination>,
    private localFilesService: LocalFilesService,
  ) { }

  private async getById(id: number): Promise<Destination> {
    const destination = await this.destinationRepository.findOne({ where: { id } });

    if (!destination) {
      throw new HttpException('Destination not found', HttpStatus.NOT_FOUND);
    }

    return destination;
  }

  async createDestination(destinationData: CreateDestinationDto) {
    const newDestination = this.destinationRepository.create(destinationData);
    await this.destinationRepository.save(newDestination);
    return newDestination
  }

  async getDestinationById(id: number): Promise<Destination> {
    return await this.getById(id);
  }

  async getAllDestinations(): Promise<Destination[]> {
    return await this.destinationRepository.find();
  }

  async updateDestination(id: number, destinationData: Partial<Destination>): Promise<Destination> {
    const destinationToUpdate = await this.getById(id);

    // Update destination properties
    Object.assign(destinationToUpdate, destinationData);

    return await this.destinationRepository.save(destinationToUpdate);

  }

  async deleteDestination(id: number): Promise<void> {
    const destinationToDelete = await this.getById(id);

    await this.destinationRepository.remove(destinationToDelete);

  }
  
  async addImage(destinationId: number, imageBuffer: Buffer, filename: string) {
    await this.getById(destinationId)
    const image = await this.localFilesService.uploadDatabaseFile(imageBuffer, filename);
    await this.destinationRepository.update(destinationId, {
      imageId: image.id
    });
    return { message: "Image uploaded successfully" };
  }
}
