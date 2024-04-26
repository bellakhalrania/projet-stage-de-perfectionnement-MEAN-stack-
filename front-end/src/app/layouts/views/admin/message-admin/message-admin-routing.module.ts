import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageAdminComponent } from './message-admin/message-admin.component';

const routes: Routes = [
  {path:'',component:MessageAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageAdminRoutingModule { }
