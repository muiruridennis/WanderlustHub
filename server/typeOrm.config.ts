import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from "typeorm";
import { $npmConfigName1681619363527 } from "./migrations/1681619363527-$npm_config_name"

config();

const configService = new ConfigService();
export default new DataSource({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    entities: [__dirname + '/../**/*.entity.ts', __dirname + '/../**/*.entity.js'],
    migrations: [$npmConfigName1681619363527],
    extra: {
        charset: 'utf8mb4_unicode_ci',
    },
    synchronize: false,
    logging: true,


});