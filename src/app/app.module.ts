import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HeaderComponent, CallToActionComponent],
  imports: [BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
