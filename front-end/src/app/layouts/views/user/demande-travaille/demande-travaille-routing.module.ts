import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeTravailleComponent } from './demande-travaille/demande-travaille.component';

const routes: Routes = [
  {path:'',component:DemandeTravailleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeTravailleRoutingModule { }
