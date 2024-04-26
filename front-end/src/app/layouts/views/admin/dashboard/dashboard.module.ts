import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsubscribersComponent } from '../chartsubscribers/chartsubscribers/chartsubscribers.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,DashboardComponent,ChartsubscribersComponent
  ]
})
export class DashboardModule { }
