import { MoldImage } from './../models/entities/moldImage';
import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';

@Injectable({
  providedIn: 'root',
})
export class MoldImageDbService extends DbServiceRepositoryBase<MoldImage> {
  data: MoldImage[] = [
    {
      id: 1,
      path: 'assets/images/mold1.png',
      mode: 'lg',
    },
    {
      id: 2,
      path: 'assets/images/mold1.png',
      mode: 'lg',
    },
    {
      id: 3,
      path: 'assets/images/mold1.png',
      mode: 'lg',
    },
    {
      id: 4,
      path: 'assets/images/mold1.png',
      mode: 'lg',
    },
    // SM IMAGES START
    {
      id: 5,
      path: 'assets/images/mold3sm.png',
      mode: 'sm',
    },
    {
      id: 6,
      path: 'assets/images/mold3sm.png',
      mode: 'sm',
    },
    {
      id: 7,
      path: 'assets/images/mold3sm.png',
      mode: 'sm',
    },
    {
      id: 8,
      path: 'assets/images/mold3sm.png',
      mode: 'sm',
    },
  ];
}
