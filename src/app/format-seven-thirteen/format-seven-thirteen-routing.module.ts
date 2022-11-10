import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatSevenThirteenPage } from './format-seven-thirteen.page';

const routes: Routes = [
  {
    path: '',
    component: FormatSevenThirteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatSevenThirteenPageRoutingModule {}
