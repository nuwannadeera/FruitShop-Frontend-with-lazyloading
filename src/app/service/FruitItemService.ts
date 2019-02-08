import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FruitItem} from '../DTO/FruitItem';
import {Observable} from 'rxjs';

export const MAIN_URL = 'http://localhost:8090';

const URL = '/api/v1/FruitItem';

@Injectable()
export class FruitItemService {
  constructor(private http: HttpClient) {}


  addItem(fruititem: FruitItem): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, fruititem);
  }

  updateItem(fruititem: FruitItem): Observable<boolean> {
    return this.http.put<boolean>(MAIN_URL + URL, fruititem);
  }

  deleteItem(id: number): Observable<FruitItem> {
    return this.http.delete<FruitItem>(MAIN_URL + URL + '/delete/' + id);
    console.log(id);
  }

  searchItem(id: number): Observable<FruitItem> {
    return this.http.get<FruitItem>(MAIN_URL + URL + '/search/' + id);
  }

  getAllItem(): Observable<Array<FruitItem>> {
    return this.http.get<Array<FruitItem>>(MAIN_URL + URL + '/');
  }

}
