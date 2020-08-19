import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

producto=
  [
{nombre: "polera", talla: 13, stock: 12, tipo: "calor"},
{nombre: "camisa", talla : 54, stock: 22, tipo: "frio"},
{nombre: "jeans", talla : 78, stock: 0, tipo: "calor"},
{nombre: "corto", talla : 90, stock: 44, tipo: "calor"},
{nombre: "buso", talla : 56, stock: 0, tipo: "frio"},
{nombre: "blusa", talla : 33, stock: 50, tipo: "frio"},
{nombre: "chompa", talla : 10, stock: 5, tipo: "calor"},
{nombre: "bozer", talla : 34, stock: 1, tipo: "frio"},
{nombre: "blusa", talla : 5, stock: 2, tipo: "calor"},
{nombre: "guantes", talla : 75, stock: 5, tipo: "calor"}
]

sumar(){
let aux=0;
for (let i = 0; i < this.producto.length; i++) {
aux = aux + this.producto[i].stock;
}
return aux;
};
quitar(data){
  data.stock=data.stock-1
}




  

  ngOnInit() {
  }

}