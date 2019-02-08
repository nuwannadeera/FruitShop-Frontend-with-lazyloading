import {NgModule} from '@angular/core';
import {OrderComponent} from './view/order.component';
import {CommonModule} from '@angular/common';
import {OrderRouterModule} from './order-router.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from '../../../service/CustomerService';
import {FruitItemService} from '../../../service/FruitItemService';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService, FruitItemService]
})

export class OrderModule { }
