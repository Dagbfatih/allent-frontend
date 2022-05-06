import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit, AfterViewInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.scroll(param['elementId']);
    });
  }

  scroll(id: string) {
    var element = document.getElementById(id);
    var headerOffset = 135;
    var elementPosition = element!.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
