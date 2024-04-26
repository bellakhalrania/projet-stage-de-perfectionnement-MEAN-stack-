import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeTravailleRoutingModule } from './demande-travaille-routing.module';
import { DemandeTravailleComponent } from './demande-travaille/demande-travaille.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeTravailleRoutingModule,DemandeTravailleComponent
  ]
})
export class DemandeTravailleModule { }
