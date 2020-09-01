import { Component, OnInit } from '@angular/core';
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  viewPort = {
    xs: false,
    small: false,
    large: false,
    xl: false,
  };

  mainMenuItems = [
    'Microsoft 365',
    'Office',
    'Windows',
    'Surface',
    'Xbox',
    'Specialerbjudanden',
    'Support',
  ];

  constructor(private viewportService: ViewportService) {}

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
