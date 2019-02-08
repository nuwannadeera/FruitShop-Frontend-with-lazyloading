import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './view/dashboard.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [

  {
    path : '',
    component : DashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})

export class DashboardRouterModule { }
