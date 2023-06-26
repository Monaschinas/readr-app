import {Injectable, OnInit} from '@angular/core';
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
  private readonly basePath = "http://localhost:8080/api/v1/security/users";

  constructor(
    private notificationService: NotificationService,
    private usersService: UsersService,
    private router: Router,
    private http: HttpClient
  ) { }

  loadFromStorage() {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage !== null) {
      this.user = JSON.parse(userFromStorage);
    }
  }

  login(username: string, password: string) {
    return this.http.post(
      `${this.basePath}/sign-in`,
      JSON.stringify({
        username: username,
        password: password
      }),
      { headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      }
    );
  }

  signUp(user: User) {
    const data = {
      username: user.username,
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      urlPhoto: user.urlPhoto?.length === 0 ? "https://cdn-icons-png.flaticon.com/512/3237/3237472.png" : user.urlPhoto,
      isAuthor: user.isAuthor,
    };
    return this.http.post(
      `${this.basePath}/sign-up`,
      JSON.stringify(data),
      { headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      }
    );
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem("user");
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
