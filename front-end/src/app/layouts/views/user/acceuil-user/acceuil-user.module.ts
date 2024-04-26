import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilUserRoutingModule } from './acceuil-user-routing.module';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcceuilUserRoutingModule,AcceuilUserComponent
  ]
})
export class AcceuilUserModule { }
