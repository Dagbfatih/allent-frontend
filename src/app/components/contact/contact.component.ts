import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  constructor() {}

  ngOnInit(): void {}

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
