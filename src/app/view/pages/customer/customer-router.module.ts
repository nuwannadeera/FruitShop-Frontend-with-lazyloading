import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './view/customer.component';
import {CommonModule} from '@angular/common';




const routes: Routes = [
  {
    path: '',
    component : CustomerComponent
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

export class CustomerRouterModule { }
