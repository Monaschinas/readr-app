import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../models/book";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.css']
})
export class EditBookFormComponent implements OnInit {
  @Input() book: Book = {} as Book;
  bookForm!: FormGroup;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl(this.book.title, [Validators.required]),
      synopsis: new FormControl(this.book.synopsis, [Validators.required]),
      publishedAt: new FormControl(this.book.publishedAt, [Validators.required]),
      thumbnailUrl: new FormControl(this.book.thumbnailUrl, [Validators.required])
    });
  }

  onSubmit() {
    if (this.bookForm.status === "INVALID") return;
    const updatedBook: Book = {
      id: this.book.id,
      authorId: this.book.authorId,
      title: this.bookForm.controls['title'].value,
      synopsis: this.bookForm.controls['synopsis'].value,
      publishedAt: this.bookForm.controls['publishedAt'].value,
      thumbnailUrl: this.bookForm.controls['thumbnailUrl'].value,
    };
    this.booksService.update(updatedBook.id, updatedBook);
  }
}
