import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultDemandeComponent } from './consult-demande/consult-demande.component';

const routes: Routes = [
  {path:'',component:ConsultDemandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultDemandeRoutingModule { }
