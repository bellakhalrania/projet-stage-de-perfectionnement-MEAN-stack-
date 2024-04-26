import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeAccepterComponent } from './demande-accepter/demande-accepter.component';

const routes: Routes = [
  {path:'',component:DemandeAccepterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeAccepterRoutingModule { }
