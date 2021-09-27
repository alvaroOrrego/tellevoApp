import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespedidaViajePage } from './despedida-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: DespedidaViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespedidaViajePageRoutingModule {}
