import { Component, OnInit, Input } from '@angular/core';
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showCarouselOne: boolean = true;

  slide() {
    this.showCarouselOne = !this.showCarouselOne;
  }

  viewPort = {
    xs: false,
    small: false,
    large: false,
    xl: false,
  };

  returnViewPort() {
    if (this.viewPort.xs) {
      return 'xs';
    } else if (this.viewPort.small) {
      return 'small';
    } else if (this.viewPort.large) {
      return 'large';
    } else {
      return 'xl';
    }
  }

  constructor(private viewportService: ViewportService) {}

  setViewport() {
    this.viewportService
      .getXSViewport()
      .subscribe(({ matches }) => (this.viewPort.xs = matches));

    this.viewportService
      .getSmallViewPort()
      .subscribe(({ matches }) => (this.viewPort.small = matches));

    this.viewportService
      .getLargeViewport()
      .subscribe(({ matches }) => (this.viewPort.large = matches));

    this.viewportService
      .getXLViewport()
      .subscribe(({ matches }) => (this.viewPort.xl = matches));
  }

  ngOnInit(): void {
    this.setViewport();
  }
}
