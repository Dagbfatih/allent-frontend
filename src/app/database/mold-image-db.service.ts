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
      path: 'assets/images/mold2.png',
    },
    {
      id: 2,
      path: 'assets/images/mold2.png',
    },
    {
      id: 3,
      path: 'assets/images/mold2.png',
    },
    {
      id: 4,
      path: 'assets/images/mold2.png',
    },
  ];
}
