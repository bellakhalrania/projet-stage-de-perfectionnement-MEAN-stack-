import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReunionComponent } from './reunion/reunion.component';

const routes: Routes = [
  { path:'',component:ReunionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RéunionRoutingModule { }
