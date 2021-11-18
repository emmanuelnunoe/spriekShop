import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  exports: [MatButtonModule, BrowserAnimationsModule, MatToolbarModule],
})
export class MyOwnCustomMaterialModule {}
