import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFigurePage } from './add-figure.page';

const routes: Routes = [
  {
    path: '',
    component: AddFigurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFigurePageRoutingModule {}
