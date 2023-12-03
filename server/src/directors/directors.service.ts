import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { DirectorsRepository } from "./directors-repository";
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDirectorDto } from "./models/create-director-Dto";
import { LocalFilesService } from "../local-file/local-file.service";

@Injectable()
export class DirectorsService {
    constructor(
        @InjectRepository(DirectorsRepository)
        private DirectorsRepository: DirectorsRepository,
        private localFilesService: LocalFilesService

    ) { }
    async createNewDirector(directorDetails: CreateDirectorDto, request) {
        const idNumber = request.body.idNumber;
        const director = await this.DirectorsRepository.findOne({ where: { idNumber } });
        if (director) {
            throw new HttpException('Error! Director Already exists. Please try again', HttpStatus.UNAUTHORIZED);
        };
        const newDirector = await this.DirectorsRepository.create(directorDetails);
        await this.DirectorsRepository.save(newDirector);
        return newDirector;
    }

    async getAllDirectors() {
        const directors = await this.DirectorsRepository.find({ relations: ["LocalFile"] });
        return directors;
    };
    async updateDirectorDetails(id: number, detailsToUpdate: CreateDirectorDto) {
        const directorToUpdate = await this.DirectorsRepository.findOne(
            {
                where: {
                    id
                }
            });
        if (!directorToUpdate) {
            throw new HttpException(`Director with id ${id} does not exist`, HttpStatus.NOT_FOUND)
        }
        const updatedDirectorDetails = await this.DirectorsRepository.save(detailsToUpdate);
        return { message: "Director updated successfully" }
    }

    async deleteDirector(id: number) {
        const directorToDelete = await this.DirectorsRepository.delete(id);
        return { directorToDelete, message: "Director deleted successfully" }
    }
    async addAvatar(directorId: number, imageBuffer: Buffer, filename: string) {
        const avatar = await this.localFilesService.uploadDatabaseFile(imageBuffer, filename);
        await this.DirectorsRepository.update(directorId, {
            avatarId: avatar.id
        });
        return avatar;
    }
}
