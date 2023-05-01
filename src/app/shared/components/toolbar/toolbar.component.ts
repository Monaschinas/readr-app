import { Component, Output, EventEmitter } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() onSideNavToggle = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  userIsLogged(): boolean {
    return this.authService.isAuthenticated();
  }

  toggleSideNav() {
    this.onSideNavToggle.emit(true);
  }

  getUser(): User {
    return this.authService.getUser()!;
  }

  getNotifications() {
    return this.authService.getNotifications();
  }
}