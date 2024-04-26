import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeStageRoutingModule } from './demande-stage-routing.module';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemandeStageRoutingModule,DemandeStageComponent
  ]
})
export class DemandeStageModule { }
