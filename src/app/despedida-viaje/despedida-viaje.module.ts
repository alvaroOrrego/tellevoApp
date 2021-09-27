import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespedidaViajePageRoutingModule } from './despedida-viaje-routing.module';

import { DespedidaViajePage } from './despedida-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespedidaViajePageRoutingModule
  ],
  declarations: [DespedidaViajePage]
})
export class DespedidaViajePageModule {}
