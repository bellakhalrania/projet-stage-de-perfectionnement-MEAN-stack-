import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';

const routes: Routes = [
  {
    path:'',component:DemandeStageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeStageRoutingModule { }
