import {NgModule} from '@angular/core';
import {SupplierComponent} from './view/supplier.component';
import {CommonModule} from '@angular/common';
import {SupplierRouterModule} from './supplier-router.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SupplierService} from '../../../service/SupplierService';



@NgModule({
  declarations: [SupplierComponent],
  imports: [
    CommonModule,
    SupplierRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers : [SupplierService]
})

export class SupplierModule { }
