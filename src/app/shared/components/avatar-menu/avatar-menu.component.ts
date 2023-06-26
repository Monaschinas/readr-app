import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {MatMenuTrigger} from "@angular/material/menu";
import {AuthService} from "../../../authentication/services/auth.service";

@Component({
  selector: 'app-avatar-menu',
  templateUrl: './avatar-menu.component.html',
  styleUrls: ['./avatar-menu.component.css']
})
export class AvatarMenuComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Input() user: User = {} as User;
  @Output() onLogout = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService
  ) { }

  toggleMenu() {
    this.trigger.openMenu();
  }

  logout() {
    this.authService.logout();
    this.onLogout.emit(true);
  }
}
