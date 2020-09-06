import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }


  getProducts() : Observable<any>{
    return this.http.get("https://agumon-13.firebaseio.com/products.json");
  }
  addProduct(product:any) : Observable<any>{
    return this.http.post("https://agumon-13.firebaseio.com/products.json",product);
  }

}
