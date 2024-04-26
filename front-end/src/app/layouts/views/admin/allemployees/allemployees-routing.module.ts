import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllemployeesComponent } from './allemployees/allemployees.component';

const routes: Routes = [
  {path:'',component:AllemployeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllemployeesRoutingModule { }
