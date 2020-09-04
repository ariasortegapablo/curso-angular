import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];

  productSubs: Subscription;

  productDeleteSubs: Subscription;
  productGetSubs: Subscription;
  productUpdateSubs: Subscription;
  productForm: FormGroup;
  idEdit: any;


  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {

    this.productSubs = this.productService.getProducts().subscribe(res => {

      // [1,2,3,4,5,6];
      // {{key:1 },{key: 2},{key: 1},{key: 1},{key: 1},{key: 1},{key: 1}}
      // Object.entries(res) [ [key, 1], [key, 2] , .......              ];

      console.log('RESPUESTA: ', res);
      console.log('RESPUESTA: ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));

    });




  }


  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }
  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }
  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }
  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  /*onEnviar() {
    console.log('VALOR: ', this.nameConatrol.value);
  }*/

  onEnviar2(): void {
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }


}
