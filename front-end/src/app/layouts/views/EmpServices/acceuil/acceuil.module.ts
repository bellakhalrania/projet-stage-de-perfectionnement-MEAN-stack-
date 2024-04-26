import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcceuilRoutingModule,AcceuilComponent
  ]
})
export class AcceuilModule { }
