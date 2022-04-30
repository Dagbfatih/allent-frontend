import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-machine-parkour',
  templateUrl: './machine-parkour.component.html',
  styleUrls: ['./machine-parkour.component.css']
})
export class MachineParkourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }

}
