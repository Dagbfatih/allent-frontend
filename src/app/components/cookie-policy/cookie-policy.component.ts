import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.css'],
})
export class CookiePolicyComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {}

  getLanguageCode() {
    return this.settingsService.getLanguageCodeFromLocalStorage();
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
