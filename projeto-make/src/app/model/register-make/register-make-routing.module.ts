import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterMakePage } from './register-make.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterMakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterMakePageRoutingModule {}
