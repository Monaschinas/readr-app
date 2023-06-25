import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByAuthorComponent } from './book-by-author.component';

describe('BookByAuthorComponent', () => {
  let component: BookByAuthorComponent;
  let fixture: ComponentFixture<BookByAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookByAuthorComponent]
    });
    fixture = TestBed.createComponent(BookByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
