import {NgModule} from '@angular/core';
import {CustomerComponent} from './view/customer.component';
import {CommonModule} from '@angular/common';
import {CustomerRouterModule} from './customer-router.module';
import {CustomerService} from '../../../service/CustomerService';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers : [CustomerService]
})

export class CustomerModule { }
