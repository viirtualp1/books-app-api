import {
  BookStateData,
  GenreType,
  NoteData,
  ChapterData
} from '../interfaces/book.interface';

export class CreateBookDto {
  id: number;
  author: string;
  name: string;
  description: string | null;
  source: string | null;
  image: string | null;
  state: BookStateData;
  page: number;
  last_page: number;
  genre: GenreType | null;
  chapter: ChapterData;
  quotes: NoteData[];
  notes: NoteData[];
}
