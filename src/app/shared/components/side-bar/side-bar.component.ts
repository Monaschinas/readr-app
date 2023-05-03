import { Component } from '@angular/core';
import {AuthService} from "../../../authentication/services/auth.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private authService: AuthService) { }

  isAuthor(): boolean {
    return this.authService.isAuthor();
  }
}
