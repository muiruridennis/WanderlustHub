import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Req } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { UpdateCustomEventDto } from "./Dtos/update-custom-event.dto"
import { CreateCustomEventDto } from './Dtos/create-custom-event.dto';
import { JwtAuthenticationGuard  } from '../auth/guards/jwt-auth.guard';
import RequestWithUser from "../auth/requestWithUser.interface";
@Controller('calendar')
export class CalendarController {
    constructor(private readonly calendarService: CalendarService) { }

    @Get('events')
    async getAllCustomEvents() {
        return await this.calendarService.getAllCusomEvents();
    }

    @Get('events/:id')
    async getCustomEventById(@Param('id') id: number) {
        return await this.calendarService.getCustomEventById(id);
    }
    @UseGuards(JwtAuthenticationGuard )
    @Post('events')
    async createCustomEvent(@Body() createCustomEventDto: CreateCustomEventDto, @Req() req: RequestWithUser) {
        return await this.calendarService.createCustomEvent(createCustomEventDto, req.user);
    }

    @Put('events/:id')
    async updateCustomEvent(
        @Param('id') id: number,
        @Body() updateCustomEventDto: UpdateCustomEventDto,
    ) {
        return await this.calendarService.updateCustomEvent(id, updateCustomEventDto);
    }

    @Delete('events/:id')
    async deleteCustomEvent(@Param('id') id: number) {
        await this.calendarService.deleteCustomEvent(id);
        return { message: 'CustomEvent deleted successfully' };
    }
}