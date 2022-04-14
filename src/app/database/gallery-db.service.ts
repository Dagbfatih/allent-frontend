import { Photo } from './../models/entities/photo';
import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';

@Injectable({
  providedIn: 'root',
})
export class GalleryDbService extends DbServiceRepositoryBase<Photo> {
  data: Photo[] = [
    { path: 'assets/gallery/urn12.jpg' },
    { path: 'assets/gallery/urn22.jpg' },
    { path: 'assets/gallery/urn32.jpg' },
    { path: 'assets/gallery/urn42.jpg' },

  ];
}
