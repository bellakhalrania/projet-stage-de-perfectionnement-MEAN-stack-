import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeCongéRoutingModule } from './demande-congé-routing.module';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeCongéRoutingModule,DemandeCongeComponent
  ]
})
export class DemandeCongéModule { }
