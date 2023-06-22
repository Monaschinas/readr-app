import {Component, Input} from '@angular/core';
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent {
  @Input() author! : User;
}
