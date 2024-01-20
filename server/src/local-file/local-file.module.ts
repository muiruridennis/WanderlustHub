import { Module } from '@nestjs/common';
import { LocalFilesService } from './local-file.service';
import { LocalFileController } from './local-file.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import LocalFile from "./entity/localFile.entity"

@Module({
  imports: [TypeOrmModule.forFeature([LocalFile])],
  providers: [LocalFilesService],
  controllers: [LocalFileController],
  exports: [LocalFilesService]
})
export class LocalFileModule {}
