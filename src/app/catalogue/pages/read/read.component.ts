import {Component, OnInit} from '@angular/core';
import {ChaptersService} from "../../../publish/services/chapters.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Chapter} from "../../../publish/models/chapter";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  chapter: Chapter = {} as Chapter;

  constructor(
    private chaptersService: ChaptersService,
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

      this.chaptersService.getChapterById(parseInt(id))
        .subscribe(response => {
          if (response === null) {
            this.router.navigate(['/']);
            return;
          }
          this.chapter = response;
        });
    });
  }
}
