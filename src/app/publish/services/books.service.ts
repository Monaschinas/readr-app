import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Book} from "../models/book";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService extends BaseService<Book> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = "http://localhost:8080/api/v1/publishing/books";
  }

  getAllBooksByAuthorId(authorId: number) {
    return this.getAll().pipe(
      map(books => books.filter(book => book.authorId === authorId))
    );
  }

  getBookById(bookId: number) {
    return this.getAll().pipe(
      map(books => books.find(book => book.id === bookId) ?? null)
    );
  }
}
