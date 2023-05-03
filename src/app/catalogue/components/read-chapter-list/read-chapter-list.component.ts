import {Component, Input, OnInit} from '@angular/core';
import {Chapter} from "../../../publish/models/chapter";
import {Router} from "@angular/router";

@Component({
  selector: 'app-read-chapter-list',
  templateUrl: './read-chapter-list.component.html',
  styleUrls: ['./read-chapter-list.component.css']
})
export class ReadChapterListComponent implements OnInit {
  @Input() chapters: Array<Chapter> = [];
  columnsToDisplay: Array<string> = ["order", "title", "actions"];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.chapters.sort((chapterA, chapterB) => chapterB.order - chapterA.order);
  }

  readChapter(chapter: Chapter) {
    this.router.navigate(['read', { id: chapter.id }]);
  }
}
