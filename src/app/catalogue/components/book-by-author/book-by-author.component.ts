import {Component, OnInit} from '@angular/core';
import {Book} from "../../../publish/models/book";
import {BooksService} from "../../../publish/services/books.service";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Component({
  selector: 'app-book-by-author',
  templateUrl: './book-by-author.component.html',
  styleUrls: ['./book-by-author.component.css']
})
export class BookByAuthorComponent implements OnInit{
  books: Array<Book> =[];
  bookMap: { authorId: number; books: Book[] }[] = [];

  constructor(
    private booksService: BooksService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.booksService.getAll()
      .subscribe(response => this.books = response);
  }

  groupBooksByAuthor(books: Book[]): void {
    const tempMap = new Map<number, Book[]>();

    books.forEach(book => {
      if (tempMap.has(book.authorId)) {
        tempMap.get(book.authorId)?.push(book);
      } else {
        tempMap.set(book.authorId, [book]);
      }
    });

    const authorIds = Array.from(tempMap.keys());

    authorIds.forEach(authorId => {
      this.getAuthorName(authorId).subscribe(authorName => {
        const books = tempMap.get(authorId) || [];
        const authorItem = { authorId, authorName, books };
        this.bookMap.push(authorItem);
      });
    });
  }

  getAuthorName(authorId: number): Observable<string> {
    return this.http.get<any>(`http://localhost:3000/api/v1/users/${authorId}`).pipe(
      map(response => response.name)
    );
  }

}
