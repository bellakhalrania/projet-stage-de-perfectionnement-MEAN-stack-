import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilUserRoutingModule } from './profil-user-routing.module';
import { ProfilUserComponent } from './profil-user/profil-user.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfilUserRoutingModule,ProfilUserComponent
  ]
})
export class ProfilUserModule { }
