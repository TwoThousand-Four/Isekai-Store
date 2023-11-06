import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFigurePageRoutingModule } from './add-figure-routing.module';

import { AddFigurePage } from './add-figure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFigurePageRoutingModule
  ],
  declarations: [AddFigurePage]
})
export class AddFigurePageModule {}
