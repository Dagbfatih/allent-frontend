import { SettingsService } from './../../services/settings.service';
import { LanguageService } from './../../services/language.service';
import { Language } from './../../models/entities/language';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';
import * as $ from 'jquery';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  languages: Language[] = [];

  constructor(
    private languageService: LanguageService,
    private settingsService: SettingsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.runOffcanvasJs();
    this.runActiveStateManagement();
    this.getLanguages();
  }

  runActiveStateManagement() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        $('.nav-link.nav-link-custom.active').removeClass('active');
        $('.nav-link.nav-link-custom').attr('routerLink', function (i, val) {
          if (val === event.url) {
            $(this).addClass('active');
          }
        });
      }
    });
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

  navigate(url: string, fragment: string) {
    this.router.navigate([url], {
      fragment: fragment,
    });
  }

  getCurrentLanguage(): Language {
    return this.settingsService.getCurrentLanguage()!;
  }

  getCurrentLanguageCode() {
    return this.settingsService.getLanguageCodeFromLocalStorage();
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
