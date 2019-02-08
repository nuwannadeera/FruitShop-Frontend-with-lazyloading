import { Component, OnInit } from '@angular/core';
import {Supplier} from '../../../../DTO/Supplier';
import {SupplierService} from '../../../../service/SupplierService';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplierList: Array<Supplier> = [];
  supplier: Supplier = new Supplier();
  manually = false;
  supp: Supplier = null;



  supplierform: FormGroup = new FormGroup({
    SupplierName: new FormControl(''),
    SupplierAddress: new FormControl(''),
    SupplierContactno: new FormControl(''),
    SupplierID: new FormControl('')
  });



  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.allSupplier();
  }

  private allSupplier(): void {
    this.supplierService.getAllSupplier().subscribe(
      value =>
        this.supplierList = value
    );
  }

  saveSupplier(): void {
    this.supplierService.addSupplier(this.supplier).subscribe(
      (result) => {

        alert('Supplier saved Successfully...');
        this.allSupplier();
        this.clear();
      }
    );
  }


  updateSupplier(): void {
    this.supplierService.updateSupplier(this.supplier).subscribe(
      (result) => {
        alert('Updated Successfully...');
        this.clear();
        this.manually = true;
        this.allSupplier();
      }
    );
  }

  deleteSupplier(): void {
    this.supplierService.deleteSupplier(this.supplier.suid).subscribe(
      (result) => {
        alert('Supplier Successfully Deleted...');
        this.allSupplier();
        this.clear();
      }
    );
  }

  searchSupplier(): void {
    this.supplierService.searchSupplier(this.supplier.suid).subscribe(
      (result) => {
        console.log('search supplier weda');
        this.supplier = result;
        console.log(this.supplier);
      }
    );
  }

  private clear() {

    this.supplierList = new Array<Supplier>();
    this.supplier = new Supplier();

  }

}
