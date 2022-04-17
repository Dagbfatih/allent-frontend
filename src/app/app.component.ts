import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { TranslationService } from './services/translation.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'allent-frontend';
  
  constructor(
    private translationService: TranslationService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.translationService.getAllTranslatesByCode(this.getLanguageCode());
  }

  getLanguageCode(): string {
    return this.settingsService.getLanguageCodeFromLocalStorage();
  }
}
