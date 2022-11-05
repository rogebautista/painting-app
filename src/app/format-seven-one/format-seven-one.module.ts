import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatSevenOnePageRoutingModule } from './format-seven-one-routing.module';

import { FormatSevenOnePage } from './format-seven-one.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatSevenOnePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormatSevenOnePage]
})
export class FormatSevenOnePageModule {}
