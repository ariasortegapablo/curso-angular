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
    this.products=this.productServices.getProducts()
  }

}
