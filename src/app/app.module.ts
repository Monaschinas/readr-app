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
import {NotificationService} from "./shared/services/notification.service";
import {AuthService} from "./shared/services/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NotificationMenuComponent } from './shared/components/notification-menu/notification-menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AvatarMenuComponent,
    NotificationMenuComponent
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
