import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('POSTGRES_HOST'),
                port: configService.get('POSTGRES_PORT'),
                database: configService.get('POSTGRES_DB'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                entities: [__dirname + '/../**/*.entity.ts', __dirname + '/../**/*.entity.js'],
                // entities: [__dirname + '/../**/*.entity.{js,ts}'],
                migrationsRun: true,
                logging: true,
                synchronize: true, // set it to false in production to avoid losing data
                migrationsTableName: "migration",// run npx typeorm migration:create -n UserData -d src/migrations, and npm run build
                //typeorm migration:run

                migrations: ["dist/src/migrations/*.js'", "dist/src/migrations/*.ts'"],
                cli: {
                    migrationsDir: 'src/migrations'
                }
            })
        }),
    ],
})
export class DatabaseModule { }
