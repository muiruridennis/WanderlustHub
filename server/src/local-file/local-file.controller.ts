import { Controller, Get, Param, StreamableFile, ParseIntPipe, Res } from '@nestjs/common';
import { LocalFilesService } from "./local-file.service";
import { Readable } from 'stream';
import { Response } from 'express';



@Controller('localfile')
export class LocalFileController {
  constructor(
    private readonly localFilesService: LocalFilesService
  ) { }

  @Get(':id')
  async getDatabaseFileById(@Param('id', ParseIntPipe) id: number, @Res({ passthrough: true }) response: Response) {
    const file = await this.localFilesService.getFileById(id);
 
    const stream = Readable.from(file.data);
 
    response.set({
      'Content-Disposition': `inline; filename="${file.filename}"`,
      // setting the Content-Disposition header, the browser can also recognize the filename of our avatar
      'Content-Type': 'image'
      // set Content-Type to 'image' so that the browser can interpret it correctly
    })
 
    return new StreamableFile(stream);
  }

}
