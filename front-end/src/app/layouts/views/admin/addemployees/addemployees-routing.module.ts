import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeesComponent } from './addemployees/addemployees.component';


const routes: Routes = [
  {path:'',component:AddemployeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddemployeesRoutingModule { }
