import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SettingsService } from './services/settings.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'allent-frontend';

  constructor(
    private translationService: TranslationService,
    private settingsService: SettingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scrollToTopOnRouteChange();
    this.translationService.getAllTranslatesByCode(this.getLanguageCode());
  }

  scrollToTopOnRouteChange() {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  getLanguageCode(): string {
    return this.settingsService.getLanguageCodeFromLocalStorage();
  }
}
