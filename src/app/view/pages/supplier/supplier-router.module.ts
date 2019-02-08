import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SupplierComponent} from './view/supplier.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path : '',
    component : SupplierComponent
  }
];

@NgModule({
  declarations : [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports : [RouterModule]
})

export class SupplierRouterModule { }
