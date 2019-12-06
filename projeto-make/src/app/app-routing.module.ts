import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./model/home/home.module').then( m => m.HomePageModule)},
  { path: 'home-login', loadChildren: () => import('./model/home-login/home-login.module').then( m => m.HomeLoginPageModule)},
  {
    path: 'home-login',
    loadChildren: () => import('./model/home-login/home-login.module').then( m => m.HomeLoginPageModule)
  },
  {
    path: 'register-account',
    loadChildren: () => import('./model/register-account/register-account.module').then( m => m.RegisterAccountPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./model/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'make-home',
    loadChildren: () => import('./model/make-home/make-home.module').then( m => m.MakeHomePageModule)
  },
  {
    path: 'register-make',
    loadChildren: () => import('./model/register-make/register-make.module').then( m => m.RegisterMakePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
