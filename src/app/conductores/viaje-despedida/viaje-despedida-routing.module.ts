import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeDespedidaPage } from './viaje-despedida.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeDespedidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeDespedidaPageRoutingModule {}
