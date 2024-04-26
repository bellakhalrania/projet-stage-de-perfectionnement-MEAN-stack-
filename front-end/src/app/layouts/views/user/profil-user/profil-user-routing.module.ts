import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilUserComponent } from './profil-user/profil-user.component';

const routes: Routes = [
  {path:'',component:ProfilUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilUserRoutingModule { }
