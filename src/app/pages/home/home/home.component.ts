import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product..service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  products =[];

  constructor(private productServices: ProductService) { }


  ngOnInit(): void {
    this.productServices.getProducts().subscribe(res =>
    Object.entries(res).map(p => this.products.push(p[1]))
    );
  }

}
