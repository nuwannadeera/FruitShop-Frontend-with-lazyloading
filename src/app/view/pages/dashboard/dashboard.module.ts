import {NgModule} from '@angular/core';
import {DashboardComponent} from './view/dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardRouterModule} from './dashboard-router.module';


@NgModule({

  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRouterModule
  ],
  bootstrap : [DashboardComponent]
})

export class DashboardModule { }
