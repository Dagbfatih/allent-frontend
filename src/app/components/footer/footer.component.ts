import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(url: string, fragment: string) {
    this.router.navigate([url], {
      fragment: fragment,
    });
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
