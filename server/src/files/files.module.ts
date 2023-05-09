import { Module } from '@nestjs/common';
import { FileService } from './files.service';
import { FileController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/files.entity';

@Module({
  controllers: [FileController],
  providers: [FileService], 
  imports: [TypeOrmModule.forFeature([FileEntity])]
})
export class FileModule {}
