import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { DatabaseModule } from '../database.module';
import { bookProviders } from './book.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [BookService, ...bookProviders]
})
export class BookModule {}
