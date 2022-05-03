import { Component, OnInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';
import { Mold } from 'src/app/models/entities/mold';
import { MoldService } from 'src/app/services/mold.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  molds: Mold[] = [];
  currentPhotoPath: string;

  constructor(
    private moldService: MoldService,
  ) {}

  ngOnInit(): void {
    this.getAllMolds();
  }

  open(path: string, content: any) {
    // this.currentPhotoPath = path;
    // this.modalService.open(content, { centered: true, size: 'xl' });
  }

  getAllMolds() {
    this.molds = this.moldService.getAll().data.filter((m) => m.mode === 'all');
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
