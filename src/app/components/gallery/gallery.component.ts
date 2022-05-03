import { Photo } from './../../models/entities/photo';
import { GalleryService } from './../../services/gallery.service';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';
import { Mold } from 'src/app/models/entities/mold';
import { MoldService } from 'src/app/services/mold.service';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  molds: Mold[] = [];
  items: GalleryItem[];

  constructor(
    private moldService: MoldService,
    private gallery: Gallery,
    public lightbox: Lightbox
  ) {}

  ngOnInit(): void {
    this.getAllMolds();
    this.getAllGalleryItems();
    this.configureLightbox();
  }

  configureLightbox() {
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Bottom,
    });
    lightboxRef.load(this.items);
  }

  getAllGalleryItems() {
    this.items = this.molds.map(
      (mold) => new ImageItem({ src: mold.path, thumb: mold.path })
    );
  }

  getAllMolds() {
    this.molds = this.moldService.getAll().data.filter((m) => m.mode === 'all');
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
