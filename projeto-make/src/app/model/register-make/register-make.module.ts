import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterMakePageRoutingModule } from './register-make-routing.module';

import { RegisterMakePage } from './register-make.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterMakePageRoutingModule
  ],
  declarations: [RegisterMakePage]
})
export class RegisterMakePageModule {}
