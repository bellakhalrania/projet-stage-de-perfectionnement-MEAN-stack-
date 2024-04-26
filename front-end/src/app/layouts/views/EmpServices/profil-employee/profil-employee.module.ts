import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilEmployeeRoutingModule } from './profil-employee-routing.module';
import { ProfilEmployeeComponent } from './profil-employee/profil-employee.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfilEmployeeRoutingModule,ProfilEmployeeComponent
  ]
})
export class ProfilEmployeeModule { }
