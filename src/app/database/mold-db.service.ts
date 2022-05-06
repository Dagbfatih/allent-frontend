import { Mold } from '../models/entities/mold';
import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';

@Injectable({
  providedIn: 'root',
})
export class MoldDbService extends DbServiceRepositoryBase<Mold> {
  data: Mold[] = [
    // FOR GALLERY
    // SM IMAGES START
    {
      id: 1,
      path: 'assets/gallery/mold1.webp',
      mode: 'all',
      name: 'mold1Title',
      description: 'mold1Description',
    },
    {
      id: 2,
      path: 'assets/gallery/mold2.webp',
      mode: 'all',
      name: 'mold2Title',
      description: 'mold2Description',
    },
    {
      id: 3,
      path: 'assets/gallery/mold3.webp',
      mode: 'all',
      name: 'mold3Title',
      description: 'mold3Description',
    },
    {
      id: 4,
      path: 'assets/gallery/mold4.webp',
      mode: 'all',
      name: 'mold4Title',
      description: 'mold4Description',
    },
    {
      id: 5,
      path: 'assets/gallery/mold5.webp',
      mode: 'all',
      name: 'mold5Title',
      description: 'mold5Description',
    },
    {
      id: 6,
      path: 'assets/gallery/mold6.webp',
      mode: 'all',
      name: 'mold6Title',
      description: 'mold6Description',
    },
    {
      id: 7,
      path: 'assets/gallery/mold7.webp',
      mode: 'all',
      name: 'mold7Title',
      description: 'mold7Description',
    },
    {
      id: 8,
      path: 'assets/gallery/mold8.webp',
      mode: 'all',
      name: 'mold8Title',
      description: 'mold8Description',
    },
    {
      id: 9,
      path: 'assets/gallery/mold9.webp',
      mode: 'all',
      name: 'mold9Title',
      description: 'mold9Description',
    },
    {
      id: 10,
      path: 'assets/gallery/mold10.webp',
      mode: 'all',
      name: 'mold10Title',
      description: 'mold10Description',
    },
    {
      id: 11,
      path: 'assets/gallery/mold11.webp',
      mode: 'all',
      name: 'mold11Title',
      description: 'mold11Description',
    },
    {
      id: 12,
      path: 'assets/gallery/mold12.webp',
      mode: 'all',
      name: 'mold12Title',
      description: 'mold12Description',
    },
    {
      id: 13,
      path: 'assets/gallery/mold13.webp',
      mode: 'all',
      name: 'mold13Title',
      description: 'mold13Description',
    },
    {
      id: 14,
      path: 'assets/gallery/mold14.webp',
      mode: 'all',
      name: 'mold14Title',
      description: 'mold14Description',
    },
    {
      id: 15,
      path: 'assets/gallery/mold15.webp',
      mode: 'all',
      name: 'mold15Title',
      description: 'mold15Description',
    },
    {
      id: 16,
      path: 'assets/gallery/mold16.webp',
      mode: 'all',
      name: 'mold16Title',
      description: 'mold6Description',

    },
    {
      id: 17,
      path: 'assets/gallery/mold17.webp',
      mode: 'all',
      name: 'mold17Title',
      description: 'mold17Description',
    },
    {
      id: 18,
      path: 'assets/gallery/mold18.webp',
      mode: 'all',
      name: 'mold18Title',
      description: 'mold18Description',
    },
    {
      id: 19,
      path: 'assets/gallery/mold19.webp',
      mode: 'all',
      name: 'mold19Title',
      description: 'mold19Description',
    },
    {
      id: 20,
      path: 'assets/gallery/mold20.webp',
      mode: 'all',
      name: 'mold20Title',
      description: 'mold20Description',
    },
    {
      id: 21,
      path: 'assets/gallery/mold21.webp',
      mode: 'all',
      name: 'mold21Title',
      description: 'mold21Description',
    },
    {
      id: 22,
      path: 'assets/gallery/mold22.webp',
      mode: 'all',
      name: 'mold22Title',
      description: 'mold22Description',
    },
    // {
    //   id: 23,
    //   path: 'assets/gallery/mold23.webp',
    //   mode: 'all',
    //   name: 'Plastik Enjeksiyon Kalıpçılığı ve\nEndüstriyel Ürün Geliştirmede\n20 Yıllık Deneyim',
    //   description: '',
    // },
  ];
}
