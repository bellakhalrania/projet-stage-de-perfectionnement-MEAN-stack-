import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultdemandeComponent } from './consultdemande/consultdemande.component';

const routes: Routes = [
  {path:'',component:ConsultdemandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultdemandeRoutingModule { }
