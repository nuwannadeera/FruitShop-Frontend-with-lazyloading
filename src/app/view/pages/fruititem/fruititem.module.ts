import {NgModule} from '@angular/core';
import {FruititemComponent} from './view/fruititem.component';
import {CommonModule} from '@angular/common';
import {FruititemRouterModule} from './fruititem-router.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FruitItemService} from '../../../service/FruitItemService';


@NgModule({
  declarations: [FruititemComponent],
  imports: [
    CommonModule,
    FruititemRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers : [FruitItemService]
})

export class FruititemModule { }
