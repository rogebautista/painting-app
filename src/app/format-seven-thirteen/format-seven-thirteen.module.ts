import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatSevenThirteenPageRoutingModule } from './format-seven-thirteen-routing.module';

import { FormatSevenThirteenPage } from './format-seven-thirteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatSevenThirteenPageRoutingModule
  ],
  declarations: [FormatSevenThirteenPage]
})
export class FormatSevenThirteenPageModule {}
