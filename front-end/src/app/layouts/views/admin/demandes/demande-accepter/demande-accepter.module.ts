import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeAccepterRoutingModule } from './demande-accepter-routing.module';
import { DemandeAccepterComponent } from './demande-accepter/demande-accepter.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeAccepterRoutingModule,DemandeAccepterComponent
  ]
})
export class DemandeAccepterModule { }
