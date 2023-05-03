import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {User} from "../../shared/models/user";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User>{
  constructor(http: HttpClient) {
    super(http);
    this.basePath = "http://localhost:3000/api/v1/users";
  }

  getUserByEmail(email: string) {
    return this.getAll().pipe(
      map(users => users.find(user => user.email === email) ?? null)
    );
  }
}
