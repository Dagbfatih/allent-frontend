import { GalleryDbService } from './../database/gallery-db.service';
import { Photo } from './../models/entities/photo';
import { Injectable } from '@angular/core';
import { ServiceRepositoryLocalBase } from '../core/services/local-database/service.repository.base.local';

@Injectable({
  providedIn: 'root',
})
export class GalleryService extends ServiceRepositoryLocalBase<Photo> {
  constructor(protected dbService: GalleryDbService) {
    super(dbService);
  }
}
