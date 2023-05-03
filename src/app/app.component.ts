import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean = false;

  toggleSideBar(): void {
    this.opened = !this.opened;
  }

  setSideBarVisible(state: boolean): void {
    this.opened = state;
  }
}
