import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RéunionRoutingModule } from './réunion-routing.module';
import { ReunionComponent } from './reunion/reunion.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RéunionRoutingModule,ReunionComponent
  ]
})
export class RéunionModule { }
