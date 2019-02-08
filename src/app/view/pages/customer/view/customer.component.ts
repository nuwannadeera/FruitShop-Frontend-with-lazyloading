import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../DTO/Customer';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../../../service/CustomerService';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customerList: Array<Customer> = [];
  customer: Customer = new Customer();
  manually = false;
  cust: Customer = null;

  customerform: FormGroup = new FormGroup({
    customername: new FormControl(''),
    customeraddress: new FormControl(''),
    customercontactno: new FormControl(''),
    customercid: new FormControl('')
  });



  constructor(private customerService: CustomerService) { }


  ngOnInit() {
      this.allCustomer();
  }

  private allCustomer(): void {
    this.customerService.getAllCustomer().subscribe(
      value =>
        this.customerList = value
    );
  }

  saveCustomer(): void {
    this.customerService.addCustomer(this.customer).subscribe(
      (result) => {
        alert('Customer saved Successfully...');
        this.allCustomer();
        this.clear();
      }
    );
  }


  private clear() {

    this.customerList = new Array<Customer>();
    this.customer = new Customer();

  }

  updateCustomer(): void {
    this.customerService.updateCustomer(this.customer).subscribe(
      (result) => {
        alert('Updated Successfully...');
        this.manually = true;
        this.allCustomer();
        this.clear();
      }
    );
  }


  deleteCustomer(): void {

      this.customerService.deleteCusomer(this.customer.cid).subscribe(
        (result) => {
          alert('Customer Successfully Deleted...');
          this.allCustomer();
          this.clear();
        }
      );
  }

  searchCustomer(): void {
    this.customerService.searchCustomer(this.customer.cid).subscribe(
      (result) => {
        console.log('search customer weda');
        this.customer = result;
        console.log(this.customer);
      }
    );
  }

}
