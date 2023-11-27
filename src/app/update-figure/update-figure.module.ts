import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFigurePageRoutingModule } from './update-figure-routing.module';

import { UpdateFigurePage } from './update-figure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFigurePageRoutingModule
  ],
  declarations: [UpdateFigurePage]
})
export class UpdateFigurePageModule {}
