import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import CustomEvent from './entity/calendar.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CustomEvent])],
  controllers: [CalendarController],
  providers: [CalendarService]
})
export class CalendarModule {}
