import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { OffreComponent } from './offre/offre.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OffreRoutingModule,OffreComponent
  ]
})
export class OffreModule { }
