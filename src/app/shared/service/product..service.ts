import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProductService {

  url= environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getProducts() : Observable<any>{
    return this.http.get(`${this.url}/concerts.json`);
  }
  // public getProductsById(id:any) : Observable<any>{
  //   return this.http.get(`${this.url}/products.json`);
  //   return `${this.url}/products.json?auth=AAAA & orderBy="ownerId"&equalTo="1"&sprint=pretty`
  // }
  public addProduct(product:any) : Observable<any>{
    return this.http.post(`${this.url}/concerts.json`,product);
  }
  public deleteProduct(id: any) : Observable<any>{
    return this.http.delete(`${this.url}/concerts/${id}.json`);
  }
  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/concerts/${id}.json`, product);
  }

}
