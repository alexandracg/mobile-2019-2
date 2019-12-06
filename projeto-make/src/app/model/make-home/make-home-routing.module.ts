import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeHomePage } from './make-home.page';

const routes: Routes = [
  {
    path: '',
    component: MakeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeHomePageRoutingModule {}
