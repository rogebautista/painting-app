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
    path: 'format',
    loadChildren: () => import('./format-seven-one/format-seven-one.module').then( m => m.FormatSevenOnePageModule)
  },  {
    path: 'format-seven-thirteen',
    loadChildren: () => import('./format-seven-thirteen/format-seven-thirteen.module').then( m => m.FormatSevenThirteenPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
