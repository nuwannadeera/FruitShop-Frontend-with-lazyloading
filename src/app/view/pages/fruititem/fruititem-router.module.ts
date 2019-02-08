import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FruititemComponent} from './view/fruititem.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [

  {
    path : '',
    component : FruititemComponent
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

export class FruititemRouterModule { }
