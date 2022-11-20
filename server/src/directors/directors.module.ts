import { Module, forwardRef } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorsController } from './directors.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DirectorsRepository } from "./directors-repository";
import {LocalFileModule} from "../local-file/local-file.module"


@Module({
    imports: [ forwardRef(() => LocalFileModule),TypeOrmModule.forFeature([DirectorsRepository])],
    providers: [DirectorsService],
    controllers: [DirectorsController],
    exports: [DirectorsService]
})
export class DirectorsModule { }
