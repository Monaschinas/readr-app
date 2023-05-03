import {Component, Input, OnInit} from '@angular/core';
import {Chapter} from "../../models/chapter";
import {ChaptersService} from "../../services/chapters.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-chapter-form',
  templateUrl: './edit-chapter-form.component.html',
  styleUrls: ['./edit-chapter-form.component.css']
})
export class EditChapterFormComponent implements OnInit {
  @Input() chapter!: Chapter;
  chapterForm!: FormGroup

  constructor(
    private chaptersService: ChaptersService
  ) {}

  ngOnInit() {
    this.chapterForm = new FormGroup({
      title: new FormControl(this.chapter.title, [Validators.required]),
      content: new FormControl(this.chapter.content, [Validators.required])
    });
  }

  onSubmit() {
    const updatedChapter: Chapter = {
      id: this.chapter.id,
      bookId: this.chapter.bookId,
      order: this.chapter.order,
      title: this.chapterForm.controls['title'].value,
      content: this.chapterForm.controls['content'].value
    }
    this.chaptersService.update(updatedChapter.id, updatedChapter);
  }
}
