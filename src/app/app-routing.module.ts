import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./authentication/pages/login/login.component";
import {HomeComponent} from "./catalogue/pages/home/home.component";
import {AuthGuard} from "./authentication/guards/auth.guard";
import {PublishComponent} from "./publish/pages/publish/publish.component";
import {AuthorGuard} from "./publish/guards/author.guard";
import {EditBookComponent} from "./publish/pages/edit-book/edit-book.component";
import {EditChapterComponent} from "./publish/pages/edit-chapter/edit-chapter.component";
import {BookDetailComponent} from "./catalogue/pages/book-detail/book-detail.component";
import {ReadComponent} from "./catalogue/pages/read/read.component";
import {SettingComponent} from "./settings/pages/setting/setting.component";
import {RegisterComponent} from "./authentication/pages/register/register.component";
import {AuthorComponent} from "./profiles/pages/author/author.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";
import {UnauthenticatedGuard} from "./authentication/guards/unauthenticated.guard";
import {ViewProfileComponent} from "./profiles/components/view-profile/view-profile.component";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ViewProfileComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate:[UnauthenticatedGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[UnauthenticatedGuard] },
  { path: 'publish', component: PublishComponent, canActivate:[AuthGuard, AuthorGuard] },
  { path: 'edit-book', component: EditBookComponent, canActivate:[AuthGuard, AuthorGuard] },
  { path: 'edit-chapter', component: EditChapterComponent, canActivate:[AuthGuard, AuthorGuard] },
  { path: 'book', component: BookDetailComponent, canActivate: [AuthGuard] },
  { path: 'read', component: ReadComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingComponent, canActivate: [AuthGuard] },
  { path: 'authors', component: AuthorComponent, canActivate: [AuthGuard]},
  { path: ':path', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
