import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }


  getProducts() : any[]{
     return[
       {
         description:'aaaa',
         imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
         ownerId:1,
         price:12,
         title:'Saltenas'


       },
       {
         description:'aaaa',
         imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
         ownerId:1,
         price:12,
         title:'Saltenas'


       }, {
         description:'aaaa',
         imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
         ownerId:1,
         price:12,
         title:'Saltenas'


       }, {
         description:'aaaa',
         imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
         ownerId:1,
         price:12,
         title:'Saltenas'


       }
     ];

  }
}
