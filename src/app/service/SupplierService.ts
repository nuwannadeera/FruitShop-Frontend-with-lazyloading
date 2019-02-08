import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supplier} from '../DTO/Supplier';
import {Observable} from 'rxjs';


export const MAIN_URL = 'http://localhost:8090';

const URL = '/api/v1/Supplier';

@Injectable()
export class SupplierService {
  constructor(private http: HttpClient) {}


  addSupplier(supplier: Supplier): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, supplier);
  }

  updateSupplier(supplier: Supplier): Observable<boolean> {
    return this.http.put<boolean>(MAIN_URL + URL, supplier);
  }

  deleteSupplier(id: number): Observable<Supplier> {
    return this.http.delete<Supplier>(MAIN_URL + URL + '/delete/' + id);
    console.log(id);
  }

  searchSupplier(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(MAIN_URL + URL + '/search/' + id);
  }

  getAllSupplier(): Observable<Array<Supplier>> {
    return this.http.get<Array<Supplier>>(MAIN_URL + URL + '/');
  }

}
