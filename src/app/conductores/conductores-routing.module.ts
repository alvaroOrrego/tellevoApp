import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductoresPage } from './conductores.page';

const routes: Routes = [
  {
    path: '',
    component: ConductoresPage
  },  {
    path: 'viaje-despedida',
    loadChildren: () => import('./viaje-despedida/viaje-despedida.module').then( m => m.ViajeDespedidaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductoresPageRoutingModule {}
