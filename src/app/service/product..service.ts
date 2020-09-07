import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }


  public getProducts() : Observable<any>{
    return this.http.get("https://agumon-13.firebaseio.com/products.json");
  }
  public addProduct(product:any) : Observable<any>{
    return this.http.post("https://agumon-13.firebaseio.com/products.json",product);
  }
  public deleteProduct(id: any) : Observable<any>{
    return this.http.delete(`https://agumon-13.firebaseio.com/products/${id}.json`);
  }
  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`https://angular-course-bcdc9.firebaseio.com/products/${id}.json`, product);
  }

}
