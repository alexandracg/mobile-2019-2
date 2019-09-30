import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'main-login', loadChildren: './main-login/main-login.module#MainLoginPageModule' },
  { path: 'visitor', loadChildren: './visitor/visitor.module#VisitorPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home-main', loadChildren: './home-main/home-main.module#HomeMainPageModule' },
  { path: 'final-home', loadChildren: './final-home/final-home.module#FinalHomePageModule' },
  { path: 'home-main-dois', loadChildren: './home-main-dois/home-main-dois.module#HomeMainDoisPageModule' },
  { path: 'admin-home', loadChildren: './admin-home/admin-home.module#AdminHomePageModule' },
  { path: 'obras-page', loadChildren: './obras-page/obras-page.module#ObrasPagePageModule' },
  { path: 'ibeacon', loadChildren: './ibeacon/ibeacon.module#IbeaconPageModule' },
  { path: 'cadastrar-obra', loadChildren: './cadastrar-obra/cadastrar-obra.module#CadastrarObraPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
