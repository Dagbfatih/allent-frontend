import { RandomMoldServiceService } from './../../services/random-mold-service.service';
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

  constructor(
    private moldService: MoldService,
    private randomMoldService: RandomMoldServiceService
  ) {}

  ngOnInit(): void {
  }

  get moldsByLg() {
    return this.randomMoldService.getMoldsByLg();
  }

  get moldsBySm() {
    return this.randomMoldService.getMoldsBySm();
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
