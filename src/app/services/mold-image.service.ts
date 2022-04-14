import { MoldImageDbService } from './../database/mold-image-db.service';
import { MoldImage } from './../models/entities/moldImage';
import { Injectable } from '@angular/core';
import { ServiceRepositoryLocalBase } from '../core/services/local-database/service.repository.base.local';

@Injectable({
  providedIn: 'root',
})
export class MoldImageService extends ServiceRepositoryLocalBase<MoldImage> {
  constructor(protected dbService: MoldImageDbService) {
    super(dbService);
  }
}
