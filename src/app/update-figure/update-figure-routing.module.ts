import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateFigurePage } from './update-figure.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateFigurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFigurePageRoutingModule {}
