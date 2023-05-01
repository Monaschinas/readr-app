import {Component, Input, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {MatMenuTrigger} from "@angular/material/menu";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-avatar-menu',
  templateUrl: './avatar-menu.component.html',
  styleUrls: ['./avatar-menu.component.css']
})
export class AvatarMenuComponent {
  @Input() user: User = {} as User;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(private authService: AuthService) { }

  toggleMenu() {
    this.trigger.openMenu();
  }

  logout() {
    this.authService.logout();
  }
}
