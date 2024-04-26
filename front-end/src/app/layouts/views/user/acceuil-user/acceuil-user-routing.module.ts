import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';

const routes: Routes = [
  {path:'',component:AcceuilUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilUserRoutingModule { }
