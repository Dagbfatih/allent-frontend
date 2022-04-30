import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {}

  navigate(url: string, fragment: string) {
    this.router.navigate([url], {
      fragment: fragment,
    });
  }

  navigateWithElement(url: string, elementId: string) {
    this.router.navigate([url]);
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
