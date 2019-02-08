import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../../DTO/Customer';
import {FruitItem} from '../../../../DTO/FruitItem';
import {NgForm} from '@angular/forms';
import {CustomerService} from '../../../../service/CustomerService';
import {FruitItemService} from '../../../../service/FruitItemService';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  customerList: Array<Customer> = [];
  customer: Customer = new Customer();
  manually = false;
  cust: Customer = null;
  fruititemList: Array<FruitItem> = [];
  fruititem: FruitItem = new FruitItem();
  item: FruitItem = null;

  @ViewChild('frmOrder') frmOrder: NgForm;
  constructor(private customerService: CustomerService, private itemService: FruitItemService) { }

  ngOnInit() {
    this.allCustomer();
    this.customerID();
    this.allFruitItem();
    this.itemID();
  }

  private allCustomer(): void {
    this.customerService.getAllCustomer().subscribe(
      value =>
        this.customerList = value
    );
  }

  private allFruitItem(): void {
    this.itemService.getAllItem().subscribe(
      value =>
        this.fruititemList = value
    );
  }




  private customerID() {
    this.customerService.getAllCustomer().subscribe(
      value =>
        this.customerList = value
    );
  }

  private itemID() {
    this.itemService.getAllItem().subscribe(
      value =>
        this.fruititemList = value
    );
  }



  searchCustomer(event: any): void {
    this.customerService.searchCustomer(this.customer.cid).subscribe(
      (result) => {
        console.log('combo search working.......');
        this.customer = result;
      }
    );
  }




  searchFruitItem(event: any): void {
    this.itemService.searchItem(this.fruititem.itemcode).subscribe(
      (result) => {
        this.fruititem = result;
      }
    );
  }






  selectCustomer(customer: Customer): void {
    this.customer = customer;
    this.cust =  Object.assign({}, customer);
    this.manually = true;
  }

  selectFruitItem(fruititem: FruitItem): void {
    this.fruititem = fruititem;
    this.item =  Object.assign({}, fruititem);
    this.manually = true;
  }



}
