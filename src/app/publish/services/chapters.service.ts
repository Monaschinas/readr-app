import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Chapter} from "../models/chapter";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChaptersService extends BaseService<Chapter> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = "http://localhost:3000/api/v1/chapters";
  }

  getQuantityOfChapterByBookId(bookId: number): Observable<number> {
    return this.getAll().pipe(
      map(chapters => chapters.filter(chapter => chapter.bookId === bookId).length)
    );
  }

  getChapterById(chapterId: number) {
    return this.getAll().pipe(
      map(chapters => chapters.find(chapter => chapter.id === chapterId) ?? null)
    );
  }
}
