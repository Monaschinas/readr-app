import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./authentication/pages/login/login.component";
import {HomeComponent} from "./catalogue/pages/home/home.component";
import {AuthGuard} from "./authentication/guards/auth.guard";
import {PublishComponent} from "./publish/pages/publish/publish.component";
import {AuthorGuard} from "./publish/guards/author.guard";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'publish', component: PublishComponent, canActivate:[AuthGuard, AuthorGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
