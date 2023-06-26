import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../../publish/services/books.service";
import {Book} from "../../../publish/models/book";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Array<Book> = [];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.booksService.getAll()
      .subscribe({
        next: (data: any) => {
          this.books = data.content;
        },
        error: error => {
          console.log(error);
        }
      });
  }
}
