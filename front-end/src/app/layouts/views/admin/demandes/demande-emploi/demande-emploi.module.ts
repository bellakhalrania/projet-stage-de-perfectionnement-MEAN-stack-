import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeEmploiRoutingModule } from './demande-emploi-routing.module';
import { DemandeEmploiComponent } from './demande-emploi/demande-emploi.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeEmploiRoutingModule,DemandeEmploiComponent
  ]
})
export class DemandeEmploiModule { }
