import { RandomSlideGeneratorService } from '../../services/random-slide-generator.service';
import { Mold } from './../../models/entities/mold';
import { MoldService } from './../../services/mold.service';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';
import randomItem from 'random-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private randomSlideGenerator: RandomSlideGeneratorService) {}

  ngOnInit(): void {}

  get slidesByLg() {
    return this.randomSlideGenerator.getSlidesByLg();
  }

  get slidesBySm() {
    return this.randomSlideGenerator.getSlidesBySm();
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
