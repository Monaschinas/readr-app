import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import { AvatarMenuComponent } from './shared/components/avatar-menu/avatar-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import { NotificationMenuComponent } from './shared/components/notification-menu/notification-menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { LoginComponent } from './authentication/pages/login/login.component';
import { LoginFormComponent } from './authentication/components/login-form/login-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './catalogue/pages/home/home.component';
import { PublishComponent } from './publish/pages/publish/publish.component';
import { BookListComponent } from "./publish/components/book-list/book-list.component";
import {MatTableModule} from "@angular/material/table";
import { EditBookComponent } from './publish/pages/edit-book/edit-book.component';
import { EditBookFormComponent } from './publish/components/edit-book-form/edit-book-form.component';
import { ChapterListComponent } from './publish/components/chapter-list/chapter-list.component';
import { MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { EditChapterComponent } from './publish/pages/edit-chapter/edit-chapter.component';
import { EditChapterFormComponent } from './publish/components/edit-chapter-form/edit-chapter-form.component';
import { BookItemComponent } from './catalogue/components/book-item/book-item.component';
import { BookDetailComponent } from './catalogue/pages/book-detail/book-detail.component';
import { ReadChapterListComponent } from './catalogue/components/read-chapter-list/read-chapter-list.component';
import { ReadComponent } from './catalogue/pages/read/read.component';
import { SettingComponent } from './settings/pages/setting/setting.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AvatarMenuComponent,
    NotificationMenuComponent,
    SideBarComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    PublishComponent,
    BookListComponent,
    EditBookComponent,
    EditBookFormComponent,
    ChapterListComponent,
    EditChapterComponent,
    EditChapterFormComponent,
    BookItemComponent,
    BookDetailComponent,
    ReadChapterListComponent,
    ReadComponent,
    SettingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
