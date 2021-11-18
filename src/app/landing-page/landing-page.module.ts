import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { MyOwnCustomMaterialModule } from 'src/app/my-own-custom-material/my-own-custom-material.module';
import { DiamondsComponent } from './diamonds/diamonds.component';

@NgModule({
  declarations: [ToolbarComponent, DiamondsComponent, MainComponent],
  imports: [CommonModule, MyOwnCustomMaterialModule],
  exports: [DiamondsComponent, MainComponent, ToolbarComponent],
})
export class LandingPageModule {}
