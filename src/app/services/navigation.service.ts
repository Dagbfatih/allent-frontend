import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public navigationElement: string = '';

  constructor(private viewportScroller: ViewportScroller) {}

  navigateTo(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual') {
    this.viewportScroller.setHistoryScrollRestoration(scrollRestoration);
  }

  setNavigationElement(elementId: string) {
    this.navigationElement = elementId;
  }

  getNavigationElement() {
    return this.navigationElement;
  }
}
