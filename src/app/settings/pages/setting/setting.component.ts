import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit{
  selectedLanguage: string = "";

  constructor(
    private readonly translateService: TranslateService
  ) { }

  ngOnInit() {
    console.log(this.translateService.defaultLang);
    this.selectedLanguage = this.translateService.defaultLang === 'en' ? "English" : "Español";
  }

  handleSelectionChange(event: any) {
    switch (this.selectedLanguage) {
      case "English":
        this.translateService.setDefaultLang("en");
        localStorage.setItem("language", "en");
        break;
      case "Español":
        this.translateService.setDefaultLang("es");
        localStorage.setItem("language", "es");
    }
  }
}
