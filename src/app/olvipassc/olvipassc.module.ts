import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvipasscPageRoutingModule } from './olvipassc-routing.module';

import { OlvipasscPage } from './olvipassc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvipasscPageRoutingModule
  ],
  declarations: [OlvipasscPage]
})
export class OlvipasscPageModule {}
