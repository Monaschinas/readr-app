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
import {HttpClientModule} from "@angular/common/http";
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
import { BookListComponent } from './publish/components/book-list/book-list.component';
import {MatTableModule} from "@angular/material/table";
import { EditBookComponent } from './publish/pages/edit-book/edit-book.component';
import { EditBookFormComponent } from './publish/components/edit-book-form/edit-book-form.component';
import { ChapterListComponent } from './publish/components/chapter-list/chapter-list.component';
import { MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
