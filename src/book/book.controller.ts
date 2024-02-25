import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }
}
