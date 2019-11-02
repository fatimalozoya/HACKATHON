import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'donaciones',
   loadChildren: () => import('./donaciones/donaciones.module').then(m => m.DonacionesPageModule) },
  { path: 'reciclaje', loadChildren: './reciclaje/reciclaje.module#ReciclajePageModule' },
  { path: 'reforestacion', loadChildren: './reforestacion/reforestacion.module#ReforestacionPageModule' },
  { path: 're-basura', loadChildren: './re-basura/re-basura.module#ReBasuraPageModule' },
  { path: 'ventas', loadChildren: './ventas/ventas.module#VentasPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'registrar', loadChildren: './registrar/registrar.module#RegistrarPageModule'},
  { path: 'metas', loadChildren: './metas/metas.module#MetasPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
