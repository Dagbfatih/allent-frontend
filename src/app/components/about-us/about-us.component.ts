import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  fragment: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((frag) => {
      this.fragment = frag!;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      //I needed also setTimeout in order to make it work
      try {
        document
          .querySelector('#' + this.fragment)
          ?.scrollIntoView();
      } catch (e) {}
    });
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
