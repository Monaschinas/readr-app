import {Component, OnInit} from '@angular/core';
import {Book} from "../../../publish/models/book";
import {BooksService} from "../../../publish/services/books.service";


@Component({
  selector: 'app-book-by-author',
  templateUrl: './book-by-author.component.html',
  styleUrls: ['./book-by-author.component.css']
})
export class BookByAuthorComponent implements OnInit{
  books: Array<Book> =[];

  constructor(
    private booksService: BooksService,
  ) {}

  ngOnInit() {
    this.booksService.getAll()
      .subscribe(response => this.books = response);
  }

}
