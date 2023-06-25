import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean = false;

  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang('en');
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
