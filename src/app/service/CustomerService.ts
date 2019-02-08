
import {HttpClient} from '@angular/common/http';
import {Customer} from '../DTO/Customer';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';


export const MAIN_URL = 'http://localhost:8090';

const URL = '/api/v1/Customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}


  addCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, customer);
  }

  updateCustomer(customer: Customer): Observable<boolean> {
    return this.http.put<boolean>(MAIN_URL + URL, customer);
  }

  deleteCusomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(MAIN_URL + URL + '/delete/' + id);
    console.log(id);
  }

  searchCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(MAIN_URL + URL + '/search/' + id);
  }

  getAllCustomer(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(MAIN_URL + URL + '/');
  }

}
