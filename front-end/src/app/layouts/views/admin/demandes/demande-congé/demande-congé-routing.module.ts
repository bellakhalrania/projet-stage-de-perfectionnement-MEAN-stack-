import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeEmploiComponent } from '../demande-emploi/demande-emploi/demande-emploi.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';

const routes: Routes = [
  {path:'',component:DemandeCongeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeCongéRoutingModule { }
