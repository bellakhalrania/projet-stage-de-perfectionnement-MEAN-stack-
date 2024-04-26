import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilEmployeeComponent } from './profil-employee/profil-employee.component';

const routes: Routes = [
  {path:'',component:ProfilEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilEmployeeRoutingModule { }
