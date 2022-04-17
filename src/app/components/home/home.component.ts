import { MoldImage } from './../../models/entities/moldImage';
import { MoldImageService } from './../../services/mold-image.service';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moldImages: MoldImage[] = [];

  constructor(private moldImageService: MoldImageService) {}

  ngOnInit(): void {
    this.getAllMoldImages();
  }

  getAllMoldImages() {
    this.moldImages = this.moldImageService.getAll().data;
  }

  get moldImagesBySm() {
    let images = this.moldImages.filter((m) => m.mode === 'sm');
    console.log("images", images)
    return images;
  }

  get moldImagesByLg() {
    let images = this.moldImages.filter((m) => m.mode === 'lg');
    return images;
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}