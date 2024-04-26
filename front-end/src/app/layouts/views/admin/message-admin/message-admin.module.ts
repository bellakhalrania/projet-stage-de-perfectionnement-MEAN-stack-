import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageAdminRoutingModule } from './message-admin-routing.module';
import { MessageAdminComponent } from './message-admin/message-admin.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageAdminRoutingModule,MessageAdminComponent
  ]
})
export class MessageAdminModule { }
