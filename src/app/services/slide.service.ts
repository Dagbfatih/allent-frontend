import { MoldService } from './mold.service';
import { SlideDbService } from './../database/slide-db.service';
import { Slide } from './../models/entities/slide';
import { Injectable } from '@angular/core';
import { ServiceRepositoryLocalBase } from '../core/services/local-database/service.repository.base.local';

@Injectable({
  providedIn: 'root',
})
export class SlideService extends ServiceRepositoryLocalBase<Slide> {
  constructor(
    protected dbService: SlideDbService,
    private moldService: MoldService
  ) {
    super(dbService);
  }
}
