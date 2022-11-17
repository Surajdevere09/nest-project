import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from '../book/book.model';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
@Module({
  imports: [SequelizeModule.forFeature([Book])],
  providers: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
