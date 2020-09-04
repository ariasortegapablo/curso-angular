import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  public getProducts(): Observable<any> {
    return this.http.get('https://electionss-test.firebaseio.com/persons.json');
  }

  public addProduct(product: any): Observable<any> {
    return this.http.post('https://electionss-test.firebaseio.com/persons.json', product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`https://electionss-test.firebaseio.com/persons/${id}.json`);
  }

  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`https://electionss-test.firebaseio.com/persons/${id}.json`, product);
  }

}
