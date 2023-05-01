import {Component, Input, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {Notification} from "../../models/notification";

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.css']
})
export class NotificationMenuComponent {
  @Input() notifications: Array<Notification> = [];
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  toggleMenu() {
    this.trigger.openMenu();
  }
}
