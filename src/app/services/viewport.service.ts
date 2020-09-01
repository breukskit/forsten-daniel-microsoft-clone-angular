import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  getXSViewport() {
    return this.breakpointObserver.observe(
      '(min-width: 1px) and (max-width: 766px)'
    );
  }

  getSmallViewPort() {
    return this.breakpointObserver.observe(
      '(min-width: 767px) and (max-width: 860px)'
    );
  }

  getLargeViewport() {
    return this.breakpointObserver.observe(
      '(min-width: 861px) and (max-width: 1400px)'
    );
  }

  getXLViewport() {
    return this.breakpointObserver.observe('(min-width: 1401px)');
  }
}
