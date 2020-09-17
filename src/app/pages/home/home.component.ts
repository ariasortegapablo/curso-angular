import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/service/product..service';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {


  products =[];
  productSubs: Subscription;

  constructor(private productServices: ProductService) { }


  ngOnInit(): void {
    this.productSubs=this.productServices.getProducts().subscribe(res =>
    Object.entries(res).map(p => this.products.push(p[1]))
    );
  }
  ngOnDestroy():void {
    this.productSubs? this.productSubs.unsubscribe():''

  }


}
