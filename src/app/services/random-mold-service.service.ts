import { MoldService } from './mold.service';
import { Injectable } from '@angular/core';
import { Mold } from '../models/entities/mold';
import randomItem from 'random-item';

@Injectable({
  providedIn: 'root',
})
export class RandomMoldServiceService {
  public randomMoldsForLg: Mold[] = [];
  public randomMoldsForSm: Mold[] = [];
  molds: Mold[] = [];

  constructor(private moldService: MoldService) {
    this.getAllMoldImages();
    this.getRandomMoldsForLg(6);
    this.getRandomMoldsForSm(6);
  }

  getAllMoldImages() {
    this.molds = this.moldService.getAll().data;
  }

  getRandomMoldsForLg(number: number) {
    let newMolds = this.molds.filter((m) => m.mode === 'lg');
    this.randomMoldsForLg = randomItem.multiple(newMolds, number);
  }

  getRandomMoldsForSm(number: number) {
    let newMolds = this.molds.filter((m) => m.mode === 'sm');
    this.randomMoldsForSm = randomItem.multiple(newMolds, number);
  }

  public getMoldsByLg() {
    return this.randomMoldsForLg;
  }

  public getMoldsBySm() {
    return this.randomMoldsForSm;
  }
}
