import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from 'src/app/my-own-custom-material/my-own-custom-material.module';
import { LandingPageModule } from './landing-page/landing-page.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyOwnCustomMaterialModule,
    LandingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
