import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {ProductService} from '../../../service/product..service';
import {subscriptionLogsToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit,OnDestroy {

   products= [];
   productForm: FormGroup;
   productSubs: Subscription;
   productGetSubs : Subscription;



  constructor(private formBuilder: FormBuilder,
              private productService:ProductService){




  }

  ngOnInit(): void {

    this.loadProducts();

   this.productForm=this.formBuilder.group(
     {
       description:['',[Validators.required,Validators.minLength(3)]],
       imageUrl:'',
       ownerId:'',
       price:'',
       title:''
     }
   );
  }
  loadProducts() : void{
    this.products=[];
    this.productGetSubs=this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p:any) => this.products.push({id:p[0],...p[1]}));

    });
  }
  onDelete(id: any): void{
    this.productService.deleteProduct(id).subscribe(res =>{
      console.log('RESP',res);
      this.loadProducts();
    },
      error => {
      console.log("error")
      });
  }

   onEnviar2() :void{

    console.log('FORM GROUP',this.productForm.value);
   this.productSubs=  this.productService.addProduct(this.productForm.value).subscribe(res =>
    {console.log("RESP FORM",res)},
      err => {
      console.log("ERROR DE SERVIDOR")
      }

    );
   }
   ngOnDestroy() : void{
     this.productSubs? this.productSubs.unsubscribe():'';
     this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
   }
}
