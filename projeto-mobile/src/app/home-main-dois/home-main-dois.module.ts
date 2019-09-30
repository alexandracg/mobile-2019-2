import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeMainDoisPage } from './home-main-dois.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMainDoisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeMainDoisPage]
})
export class HomeMainDoisPageModule {}
