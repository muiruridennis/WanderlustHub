import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import DatabaseLogger from '../database/databaseLogger';

import { config } from 'dotenv';
config();

const configService = new ConfigService();


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            // logger: new DatabaseLogger(),
            host: configService.get('POSTGRES_HOST'),
            port: configService.get('POSTGRES_PORT'),
            username: configService.get('POSTGRES_USER'),
            password: configService.get('POSTGRES_PASSWORD'),
            database: configService.get('POSTGRES_DB'),
            entities: [__dirname + '/../**/*.entity.ts', __dirname + '/../**/*.entity.js'],
            migrations: ["dist/src/migrations/*.js'", "dist/src/migrations/*.ts'"],
            migrationsTableName: "migrations",
            extra: {
                charset: 'utf8mb4_unicode_ci',
            },
            synchronize: false,
            logging: true,
        };
    },
};
