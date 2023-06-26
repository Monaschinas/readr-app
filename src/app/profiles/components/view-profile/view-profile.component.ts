import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit{
  user:User | null = null;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    const userParam = this.route.snapshot.paramMap.get('user');
    if (userParam) {
      this.user = JSON.parse(userParam);
    }
  }
}
