import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';

const routes: Routes = [
  {path:'',component:ProfilAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilAdminRoutingModule { }
