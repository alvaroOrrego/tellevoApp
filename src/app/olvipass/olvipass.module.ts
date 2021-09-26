import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvipassPageRoutingModule } from './olvipass-routing.module';

import { OlvipassPage } from './olvipass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvipassPageRoutingModule
  ],
  declarations: [OlvipassPage]
})
export class OlvipassPageModule {}
