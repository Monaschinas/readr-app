import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {MatMenuTrigger} from "@angular/material/menu";
import {AuthService} from "../../../authentication/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-avatar-menu',
  templateUrl: './avatar-menu.component.html',
  styleUrls: ['./avatar-menu.component.css']
})
export class AvatarMenuComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Input() user: User = {} as User;
  @Output() onLogout = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) { }

  toggleMenu() {
    this.trigger.openMenu();
  }

  logout() {
    this.authService.logout();
    this.onLogout.emit(true);
  }
  ToProfile() {
    this.router.navigate(['/profile', { user: JSON.stringify(this.user) }]);
  }
}
