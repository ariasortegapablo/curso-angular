import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {ProductService} from '../../../service/product..service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

   productForm: FormGroup;

   // nameControl= new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService:ProductService) {

  }

  ngOnInit(): void {
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
  // onEnviar(){
  //   console.log(this.nameControl.value)
  // }

   onEnviar2() :void{

    console.log('FORM GROUP',this.productForm.value);
    this.productService.addProduct(this.productForm.value).subscribe(res => res);
   }
}
