import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../models/book";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book!: Book;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id === null) {
        this.router.navigate(['/']);
        return;
      }

      this.booksService.getBookById(parseInt(id))
        .subscribe(response => {
          if (response === null) {
            this.router.navigate(['/']);
            return;
          }
          this.book = response;
        })
    });
  }
}
