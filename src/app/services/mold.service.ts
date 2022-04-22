import { MoldDbService } from '../database/mold-image-db.service';
import { Mold } from '../models/entities/mold';
import { Injectable } from '@angular/core';
import { ServiceRepositoryLocalBase } from '../core/services/local-database/service.repository.base.local';

@Injectable({
  providedIn: 'root',
})
export class MoldService extends ServiceRepositoryLocalBase<Mold> {
  constructor(protected dbService: MoldDbService) {
    super(dbService);
  }
}
