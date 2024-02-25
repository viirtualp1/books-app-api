import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('CAT_MODEL')
    private bookModel: Model<Book>
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async getBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
