import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeHomePageRoutingModule } from './make-home-routing.module';

import { MakeHomePage } from './make-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeHomePageRoutingModule
  ],
  declarations: [MakeHomePage]
})
export class MakeHomePageModule {}
