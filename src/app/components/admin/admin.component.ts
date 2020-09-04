import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  products = [];

  productSubs: Subscription;

  productDeleteSubs: Subscription;
  productGetSubs: Subscription;
  productUpdateSubs: Subscription;
  productForm: FormGroup;
  idEdit: any;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.loadProduct();

    this.productForm = this.formBuilder.group({
     // description: ['description', [Validators.required, Validators.minLength(3)]],
      age: '',
      enable: '',
      name: '',
      urlImage: ''
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
