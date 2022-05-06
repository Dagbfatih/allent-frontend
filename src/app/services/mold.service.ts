import { Injectable } from '@angular/core';
import { ServiceRepositoryLocalBase } from '../core/services/local-database/service.repository.base.local';
import { MoldDbService } from '../database/mold-db.service';
import { Mold } from '../models/entities/mold';

@Injectable({
  providedIn: 'root',
})
export class MoldService extends ServiceRepositoryLocalBase<Mold> {
  constructor(protected dbService: MoldDbService) {
    super(dbService);
  }
}
