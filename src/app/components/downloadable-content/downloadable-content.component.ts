import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-downloadable-content',
  templateUrl: './downloadable-content.component.html',
  styleUrls: ['./downloadable-content.component.css'],
})
export class DownloadableContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
