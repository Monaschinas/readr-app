import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../authentication/services/auth.service";


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  route: string | null;

  constructor(private activatedRoute: ActivatedRoute, private authenticated: AuthService) {
    this.route = '';
  }

  ngOnInit() {
    this.route = this.activatedRoute.snapshot.paramMap.get('path');
  }

  isLogged(): boolean {
    return this.authenticated.isAuthenticated();
  }
}
