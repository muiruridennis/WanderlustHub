
import {
    Body,
    Controller,
    UseGuards,
    Post,
} from '@nestjs/common';
import {JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import EmailSchedulingService from './email-scheduling.service';
import EmailScheduleDto from './dto/emailSchedule.dto';

@Controller('email-scheduling')
export default class EmailSchedulingController {
    constructor(
        private readonly emailSchedulingService: EmailSchedulingService
    ) { }

    @Post('schedule')
    @UseGuards(JwtAuthenticationGuard )
    async scheduleEmail(@Body() emailSchedule: EmailScheduleDto) {
        this.emailSchedulingService.scheduleEmail(emailSchedule);
    }
}