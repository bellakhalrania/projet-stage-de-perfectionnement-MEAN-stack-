import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagedemandeComponent } from './stagedemande/stagedemande.component';

const routes: Routes = [
  {path:'',component:StagedemandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class STAGEdemandeRoutingModule { }
