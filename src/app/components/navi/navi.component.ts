import { SettingsService } from './../../services/settings.service';
import { LanguageService } from './../../services/language.service';
import { Language } from './../../models/entities/language';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';
import * as $ from 'jquery';

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
    this.runOffcanvasJs();
    this.getLanguages();
  }

  runOffcanvasJs() {
    (function mainScript() {
      'use strict';
      const offcanvasToggle = document.querySelector(
        '[data-bs-toggle="offcanvas"]'
      );
      const offcanvasCollapse = document.querySelector('.offcanvas-collapse');
      offcanvasToggle?.addEventListener('click', function () {
        offcanvasCollapse?.classList.toggle('open');
      });
    })();
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
