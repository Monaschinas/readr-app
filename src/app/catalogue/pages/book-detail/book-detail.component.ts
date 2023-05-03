import {Component, OnInit} from '@angular/core';
import {Book} from "../../../publish/models/book";
import {BooksService} from "../../../publish/services/books.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Chapter} from "../../../publish/models/chapter";
import {ChaptersService} from "../../../publish/services/chapters.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!: Book;
  chapters: Array<Chapter> = [];

  constructor(
    private booksService: BooksService,
    private chaptersService: ChaptersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id: any = params.get('id');

      if (id === null) {
        this.router.navigate(['/']);
        return;
      }

      id = parseInt(id);

      this.booksService.getBookById(id)
        .subscribe(response => {
          if (response === null) {
            this.router.navigate(['/']);
            return;
          }
          this.book = response;
        });

      this.chaptersService.getAll()
        .subscribe(response => this.chapters = response.filter(chapter => chapter.bookId === id));
    });
  }
}
