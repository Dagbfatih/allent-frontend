import { Photo } from './../../models/entities/photo';
import { GalleryService } from './../../services/gallery.service';
import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.photos = this.galleryService.getAll().data;
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
