import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeUserRoutingModule } from './liste-user-routing.module';
import { ListeUserComponent } from './liste-user/liste-user.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListeUserRoutingModule,ListeUserComponent
  ]
})
export class ListeUserModule { }
