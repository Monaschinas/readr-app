import {Injectable} from '@angular/core';
import {User} from "../../shared/models/user";
import {NotificationService} from "../../shared/services/notification.service";
import {Notification} from "../../shared/models/notification";
import {Router} from "@angular/router";
import {UsersService} from "./users.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | null = null;
  private notifications: Array<Notification> = [];
  private readonly basePath = "https://localhost:8080/api/v1/security/users";

  constructor(
    private notificationService: NotificationService,
    private usersService: UsersService,
    private router: Router,
    private http: HttpClient
  ) { }

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

  signUp(user: User) {
    const data = {
      username: user.username,
      email: user.email,
      password: user.password
    };
    return this.http.post(
      `${this.basePath}/sign-up`,
      data,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    );
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
