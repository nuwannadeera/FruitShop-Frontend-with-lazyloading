import {Component, OnInit, ViewChild} from '@angular/core';
import {FruitItem} from '../../../../DTO/FruitItem';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import {FruitItemService} from '../../../../service/FruitItemService';

@Component({
  selector: 'app-fruititem',
  templateUrl: './fruititem.component.html',
  styleUrls: ['./fruititem.component.css']
})
export class FruititemComponent implements OnInit {

  fruititemList: Array<FruitItem> = [];
  fruititem: FruitItem = new FruitItem();
  manually = false;
  item: FruitItem = null;



  fruititemform: FormGroup = new FormGroup({
    FruitName: new FormControl(''),
    FruitUnitPrice: new FormControl(''),
    FruitQtyOnHand: new FormControl(''),
    SupplierID: new FormControl(''),
    FruitItemID: new FormControl('')
  });




  constructor(private fruititemService: FruitItemService) { }

  ngOnInit() {
    this.allFruitItem();
  }

  private allFruitItem(): void {
    this.fruititemService.getAllItem().subscribe(
      value =>
        this.fruititemList = value
    );
  }


  saveFruitItem(): void {
    this.fruititemService.addItem(this.fruititem).subscribe(
      (result) => {
        alert('Customer saved Successfully...');
        this.allFruitItem();
        this.clear();
      }
    );
  }

  searchFruitItem(): void {
    this.fruititemService.searchItem(this.fruititem.itemcode).subscribe(
      (result) => {
        console.log('item customer weda' + this.fruititem);
        this.fruititem = result;
        console.log(this.fruititem);
      }
    );
  }

  updateFruitItem(): void {
    this.fruititemService.updateItem(this.fruititem).subscribe(
      (result) => {
        alert('Updated Successfully...');
        this.manually = true;
        this.allFruitItem();
        this.clear();
      }
    );
  }

  private clear() {

    this.fruititemList = new Array<FruitItem>();
    this.fruititem = new FruitItem();

  }

}
