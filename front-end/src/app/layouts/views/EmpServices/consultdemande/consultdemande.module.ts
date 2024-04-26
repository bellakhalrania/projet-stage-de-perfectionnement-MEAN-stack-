import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultdemandeRoutingModule } from './consultdemande-routing.module';
import { ConsultDemandeComponent } from '../../user/consult-demande/consult-demande/consult-demande.component';
import { ConsultdemandeComponent } from './consultdemande/consultdemande.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsultdemandeRoutingModule,ConsultdemandeComponent
  ]
})
export class ConsultdemandeModule { }
