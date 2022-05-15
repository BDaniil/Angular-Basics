import { Component } from '@angular/core';
import { BookModel } from 'src/interface/Book';
import booksJSON from './books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  initial: Array<BookModel> = booksJSON;
  books: Array<BookModel> = this.initial;

  searchBook(value: string) {
    this.books = this.initial.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
