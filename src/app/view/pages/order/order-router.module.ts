import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './view/order.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path : '',
    component : OrderComponent
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

export class OrderRouterModule { }
