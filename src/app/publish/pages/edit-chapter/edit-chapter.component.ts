import {Component, OnInit} from '@angular/core';
import {Chapter} from "../../models/chapter";
import {ActivatedRoute, Router} from "@angular/router";
import {ChaptersService} from "../../services/chapters.service";

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.css']
})
export class EditChapterComponent implements OnInit {
  chapter!: Chapter;

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
        })
    });
  }
}
