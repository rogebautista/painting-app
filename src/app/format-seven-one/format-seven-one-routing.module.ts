import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatSevenOnePage } from './format-seven-one.page';

const routes: Routes = [
  {
    path: '',
    component: FormatSevenOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatSevenOnePageRoutingModule {}
