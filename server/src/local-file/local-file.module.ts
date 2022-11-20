import { Module } from '@nestjs/common';
import { LocalFilesService } from './local-file.service';
import { LocalFileController } from './local-file.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {LocalFileRepository} from "./localfileRepository"

@Module({
  imports: [TypeOrmModule.forFeature([LocalFileRepository])],
  providers: [LocalFilesService],
  controllers: [LocalFileController],
  exports: [LocalFilesService]
})
export class LocalFileModule {}
