import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {NotificationService} from "./notification.service";
import {Notification} from "../models/notification";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | null = null;
  private notifications: Array<Notification> = [];

  constructor(private notificationService: NotificationService) {
    this.login({
      id: 1,
      name: "Menhera chan",
      email: "menhera@mail.com",
      urlPhoto: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/menhera-chan-3-1/sticker_28.png?0fce8e4c13ea0763f40b8d577fd192f3"
    });
  }

  login(user: User): void {
    this.user = user;
    this.notificationService.getNotifications().subscribe((response: any) => {
      this.notifications = response.filter((notification: any)=> notification.userId === user.id);
    });
  }

  logout(): void {
    this.user = null;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  getUser(): User | null {
    return this.user ? { ...this.user } : null;
  }

  getNotifications(): Array<Notification> {
    return this.notifications;
  }
}
