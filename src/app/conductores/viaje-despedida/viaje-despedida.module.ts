import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeDespedidaPageRoutingModule } from './viaje-despedida-routing.module';

import { ViajeDespedidaPage } from './viaje-despedida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeDespedidaPageRoutingModule
  ],
  declarations: [ViajeDespedidaPage]
})
export class ViajeDespedidaPageModule {}
