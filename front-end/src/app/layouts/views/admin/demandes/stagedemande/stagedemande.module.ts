import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { STAGEdemandeRoutingModule } from './stagedemande-routing.module';
import { StagedemandeComponent } from './stagedemande/stagedemande.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    STAGEdemandeRoutingModule,StagedemandeComponent
  ]
})
export class STAGEdemandeModule { }
