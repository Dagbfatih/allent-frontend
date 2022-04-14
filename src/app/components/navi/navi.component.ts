import { SettingsService } from './../../services/settings.service';
import { LanguageService } from './../../services/language.service';
import { Language } from './../../models/entities/language';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';
declare var $: any;

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  languages: Language[] = [];

  constructor(
    private languageService: LanguageService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.getLanguages();
  }

  getCurrentLanguage(): Language {
    return this.settingsService.getCurrentLanguage()!;
  }

  getLanguages() {
    this.languages = this.languageService.getAll().data;
  }

  setLanguage(languageCode: string) {
    this.settingsService.setLanguage(languageCode);
    location.reload();
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
