import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvipassPage } from './olvipass.page';

const routes: Routes = [
  {
    path: '',
    component: OlvipassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvipassPageRoutingModule {}
