import { Photo } from './../models/entities/photo';
import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';

@Injectable({
  providedIn: 'root',
})
export class GalleryDbService extends DbServiceRepositoryBase<Photo> {
  data: Photo[] = [
    { path: 'assets/gallery/mold1.jpeg' },
    { path: 'assets/gallery/mold2.jpeg' },
    { path: 'assets/gallery/mold3.jpeg' },
    { path: 'assets/gallery/mold4.jpeg' },
    { path: 'assets/gallery/mold5.jpeg' },
    { path: 'assets/gallery/mold6.jpeg' },
    { path: 'assets/gallery/mold7.jpeg' },
    { path: 'assets/gallery/mold8.jpeg' },
    { path: 'assets/gallery/mold9.jpeg' },
    { path: 'assets/gallery/mold10.jpeg' },
    { path: 'assets/gallery/mold11.jpeg' },
    { path: 'assets/gallery/mold12.jpeg' },
    { path: 'assets/gallery/mold13.jpeg' },
    { path: 'assets/gallery/mold14.jpeg' },
    { path: 'assets/gallery/mold15.jpeg' },
    { path: 'assets/gallery/mold16.jpeg' },
    { path: 'assets/gallery/mold17.jpeg' },
    { path: 'assets/gallery/mold18.jpeg' },
    { path: 'assets/gallery/mold19.jpeg' },
    { path: 'assets/gallery/mold20.jpeg' },
    { path: 'assets/gallery/mold21.jpeg' },
    { path: 'assets/gallery/mold22.jpeg' },
    { path: 'assets/gallery/mold23.jpeg' },
    

  ];
}
