import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseLogger from './databaseLogger';
import { typeOrmAsyncConfig } from '../config/typeorm.config';


@Module({
    imports: [
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig)
    ],
})
export class DatabaseModule { }
