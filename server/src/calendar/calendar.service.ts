import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import User from "../users/entity/user.entity";
import CustomEvent from './entity/calendar.entity';
import { UpdateCustomEventDto } from "./Dtos/update-custom-event.dto"
import { CreateCustomEventDto } from './Dtos/create-custom-event.dto';
@Injectable()
export class CalendarService {
    constructor(
        @InjectRepository(CustomEvent)
        private readonly customEventRepository: Repository<CustomEvent>
    ) { }
    async createCustomEvent(eventData: CreateCustomEventDto, user: User,) {
        const customEvent = this.customEventRepository.create({
            ...eventData,
            user
        });
        await this.customEventRepository.save(customEvent);
        return customEvent;
    }
    async getAllCusomEvents() {
        return await this.customEventRepository.find()
    }

    async getCustomEventById(id: number) {
        const customEvent = await this.customEventRepository.findOne({
            where: { id }
        });
        if (!customEvent) {
            throw new HttpException(`CustomEvent with ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return customEvent;
    }

    async updateCustomEvent(id: number, eventsupdates: UpdateCustomEventDto) {
        await this.getCustomEventById(id);
        await this.customEventRepository.update(id, eventsupdates);
        const updatedCustomEvent = await this.getCustomEventById(id);
        return { message: "Custom event updated successfully!", updatedCustomEvent };
    }


    async deleteCustomEvent(id: number) {
        const customEvent = await this.getCustomEventById(id);
        await this.customEventRepository.remove(customEvent);
        return { message: 'Custom Event deleted successfully!' }
    }
}
