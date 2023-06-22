import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../authentication/services/users.service";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors : Array<User> = [];

  constructor(private usersService : UsersService ) {}

  ngOnInit() {
    this.usersService.getAll()
      .subscribe(response => this.authors = response.filter(user => user.isAuthor));
  }
}
