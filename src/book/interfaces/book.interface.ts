import { Document } from 'mongoose';

export enum GenreType {
  PSYCHOLOGY = 'psychology',
  FANTASTIC = 'fantastic'
}

export interface ChapterData {
  readonly index: number;
  readonly name: string;
  readonly first_page: number;
  readonly last_page: number;
}

export interface NoteData {
  readonly page: number | null;
  readonly text: string;
}

export interface BookStateData {
  readonly is_reading: boolean;
  readonly is_finished: boolean;
  readonly is_abandoned: boolean;
  readonly is_new: boolean;
  readonly is_waiting: boolean;
}

export interface Book extends Document {
  readonly id: number;
  readonly author: string;
  readonly name: string;
  readonly description: string | null;
  readonly source: string | null;
  readonly image: string | null;
  readonly state: BookStateData;
  readonly page: number;
  readonly last_page: number;
  readonly genre: GenreType | null;
  readonly chapter: ChapterData;
  readonly quotes: NoteData[];
  readonly notes: NoteData[];
}
