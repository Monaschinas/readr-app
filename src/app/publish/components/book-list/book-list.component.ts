import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {BooksService} from "../../services/books.service";
import {AuthService} from "../../../authentication/services/auth.service";
import {ChaptersService} from "../../services/chapters.service";
import {combineLatest, forkJoin, Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookData: Array<Book> = [];
  columnsToDisplay: Array<string> = ["cover", "title", "quantity-of-chapters", "published-date", "actions"];

  constructor(
    private booksService: BooksService,
    private chaptersService: ChaptersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.booksService.getAllBooksByAuthorId(this.authService.getUser()!.id).pipe(
      switchMap((books: Array<Book>) => {
        const chapterCount$: Observable<number>[] = books.map((book: Book) =>
          this.chaptersService.getQuantityOfChapterByBookId(book.id)
        );
        return combineLatest([of(books), forkJoin(chapterCount$)]);
      })
    ).subscribe(([books, chapterCounts]) => {
      this.bookData = books.map(((book, i) => ({ ...book, chapterCount: chapterCounts[i]})))
    });
  }

  goToEditBook(book: Book) {
    this.router.navigate([`/edit-book`, { id: book.id }]);
  }
}
