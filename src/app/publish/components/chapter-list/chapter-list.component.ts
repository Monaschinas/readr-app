import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {ChaptersService} from "../../services/chapters.service";
import {Chapter} from "../../models/chapter";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  @Input() book: Book = {} as Book;
  chapterData: Array<Chapter> = [];
  columnsToDisplay: Array<string> = ["order", "title", "actions"];

  constructor(
    private chaptersService: ChaptersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.chaptersService.getAll()
      .subscribe(response => {
        this.chapterData = response.filter(chapter => chapter.bookId === this.book.id);
      })
  }

  goToEditChapter(chapter: Chapter) {
    this.router.navigate(['edit-chapter', { id: chapter.id }]);
  }
}
