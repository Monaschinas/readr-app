import {Injectable} from '@angular/core';
import {User} from "../../shared/models/user";
import {NotificationService} from "../../shared/services/notification.service";
import {Notification} from "../../shared/models/notification";
import {Router} from "@angular/router";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | null = null;
  private notifications: Array<Notification> = [];

  constructor(
    private notificationService: NotificationService,
    private usersService: UsersService,
    private router: Router
  ) { this.login("brunodiaz@mail.com", "asd"); }

  login(email: string, password: string): void {
    email = email.toLowerCase();
    this.usersService.getUserByEmail(email)
      .subscribe(response => {
        if (response === null) return;
        this.user = response;
        this.notificationService.getNotifications().subscribe((response: any) => {
          this.notifications = response.filter((notification: any)=> notification.userId === this.user!.id);
          this.router.navigate(['/']);
        });
      })
  }

  logout(): void {
    this.user = null;
    this.router.navigate(["login"]);
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  isAuthor(): boolean {
    return this.user?.isAuthor ?? false;
  }

  getUser(): User | null {
    return this.user ? { ...this.user } : null;
  }

  getNotifications(): Array<Notification> {
    return this.notifications;
  }
}
