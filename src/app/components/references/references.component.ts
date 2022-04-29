import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.tap();
  }

  tap() {
    $('.img-sm').on('touchmove', function () {
      $('.img-sm.active').removeClass('active');
      $(this).addClass('active');
      
    });

    
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
