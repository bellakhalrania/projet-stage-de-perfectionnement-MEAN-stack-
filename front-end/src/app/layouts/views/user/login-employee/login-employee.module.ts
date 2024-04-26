import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginEmployeeRoutingModule } from './login-employee-routing.module';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginEmployeeRoutingModule,LoginEmployeeComponent
  ]
})
export class LoginEmployeeModule { }
