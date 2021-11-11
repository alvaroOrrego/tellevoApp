import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'conductores',
    children:[
      {
        path : '',
        loadChildren: () => import('./conductores/conductores.module').then( m => m.ConductoresPageModule)
      },{
        path:':idConductor',
        loadChildren: () => import('./conductores/viaje-despedida/viaje-despedida.module').then( m => m.ViajeDespedidaPageModule)
      }
    ]   
  },
  {
    path: 'loginuser',
    loadChildren: () => import('./loginuser/loginuser.module').then( m => m.LoginuserPageModule)
  },
  {
    path: 'loginconductor',
    loadChildren: () => import('./loginconductor/loginconductor.module').then( m => m.LoginconductorPageModule)
  },
  {
    path: 'olvipass',
    loadChildren: () => import('./olvipass/olvipass.module').then( m => m.OlvipassPageModule)
  },
  {
    path: 'olvipassc',
    loadChildren: () => import('./olvipassc/olvipassc.module').then( m => m.OlvipasscPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'despedida-viaje',
    loadChildren: () => import('./despedida-viaje/despedida-viaje.module').then( m => m.DespedidaViajePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
