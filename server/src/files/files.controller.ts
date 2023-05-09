import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, UseGuards } from '@nestjs/common';
import { FileService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileStorage } from './storage';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('files')
@ApiTags('files')
@UseGuards(JwtAuthGuard)
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  findAll(){
    return this.fileService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: fileStorage
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties:{
        file:{
          type: 'string',
          format: 'binary'
        }
      }
    }
  })
  create(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({maxSize: 1024 * 5})
      ]
    })
  ) file: Express.Multer.File) {
    return file
  }

}
