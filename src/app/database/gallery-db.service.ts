import { Photo } from './../models/entities/photo';
import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';

@Injectable({
  providedIn: 'root',
})
export class GalleryDbService extends DbServiceRepositoryBase<Photo> {
  data: Photo[] = [
    { path: 'assets/gallery/mold1.webp' },
    { path: 'assets/gallery/mold2.webp' },
    { path: 'assets/gallery/mold3.webp' },
    { path: 'assets/gallery/mold4.webp' },
    { path: 'assets/gallery/mold5.webp' },
    { path: 'assets/gallery/mold6.webp' },
    { path: 'assets/gallery/mold7.webp' },
    { path: 'assets/gallery/mold8.webp' },
    { path: 'assets/gallery/mold9.webp' },
    { path: 'assets/gallery/mold10.webp' },
    { path: 'assets/gallery/mold11.webp' },
    { path: 'assets/gallery/mold12.webp' },
    { path: 'assets/gallery/mold13.webp' },
    { path: 'assets/gallery/mold14.webp' },
    { path: 'assets/gallery/mold15.webp' },
    { path: 'assets/gallery/mold16.webp' },
    { path: 'assets/gallery/mold17.webp' },
    { path: 'assets/gallery/mold18.webp' },
    { path: 'assets/gallery/mold19.webp' },
    { path: 'assets/gallery/mold20.webp' },
    { path: 'assets/gallery/mold21.webp' },
    { path: 'assets/gallery/mold22.webp' },
    { path: 'assets/gallery/mold23.webp' },
    

  ];
}
