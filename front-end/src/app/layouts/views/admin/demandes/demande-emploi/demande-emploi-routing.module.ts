import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeEmploiComponent } from './demande-emploi/demande-emploi.component';

const routes: Routes = [
  {path:'',component:DemandeEmploiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeEmploiRoutingModule { }
