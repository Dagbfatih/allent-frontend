import { Slide } from '../models/entities/slide';
import { SlideService } from './slide.service';
import { MoldService } from './mold.service';
import { Injectable } from '@angular/core';
import { Mold } from '../models/entities/mold';
import randomItem from 'random-item';

@Injectable({
  providedIn: 'root',
})
export class RandomSlideGeneratorService {
  public randomSlidesForLg: Slide[] = [];
  public randomSlidesForSm: Slide[] = [];
  slides: Slide[] = [];

  constructor(private slideService: SlideService) {
    this.getAllMoldImages();
    this.getRandomSlidesForLg(3);
    this.getRandomSlideForSm(3);
  }

  getAllMoldImages() {
    this.slides = this.slideService.getAll().data;
  }

  getRandomSlidesForLg(number: number) {
    let newSlides = this.slides.filter((s) => s.type === 'lg');
    this.randomSlidesForLg = randomItem.multiple(newSlides, number);

    const firstElement = this.slides.find((s) => s.id === 1)!;

    if (this.randomSlidesForLg.includes(firstElement)) {
      return;
    }

    this.randomSlidesForLg.splice(0, 0, firstElement);
  }

  getRandomSlideForSm(number: number) {
    let newSlides = this.slides.filter((s) => s.type === 'sm');
    this.randomSlidesForSm = randomItem.multiple(newSlides, number);

    const firstElement = this.slides.find((s) => s.id === 23)!;

    if (this.randomSlidesForSm.includes(firstElement)) {
      return;
    }

    this.randomSlidesForSm.splice(0, 0, firstElement);
  }

  public getSlidesByLg() {
    return this.randomSlidesForLg;
  }

  public getSlidesBySm() {
    return this.randomSlidesForSm;
  }
}
