import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadChapterListComponent } from './read-chapter-list.component';

describe('ReadChapterListComponent', () => {
  let component: ReadChapterListComponent;
  let fixture: ComponentFixture<ReadChapterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadChapterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadChapterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
