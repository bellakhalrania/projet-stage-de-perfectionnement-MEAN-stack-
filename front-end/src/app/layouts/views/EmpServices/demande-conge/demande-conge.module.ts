import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeCongeRoutingModule } from './demande-conge-routing.module';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeCongeRoutingModule,DemandeCongeComponent
  ]
})
export class DemandeCongeModule { }
