import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from "./authentication/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean = false;

  constructor(
    private readonly translate: TranslateService,
    private readonly authService: AuthService
  ) {
    // Set the default language
    this.translate.setDefaultLang('en');
    this.authService.loadFromStorage();
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
  getTranslation(key: string) {
    return this.translate.instant(key);
  }

  toggleSideBar(): void {
    this.opened = !this.opened;
  }

  setSideBarVisible(state: boolean): void {
    this.opened = state;
  }
}
