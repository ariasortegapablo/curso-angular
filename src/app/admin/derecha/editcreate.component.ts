import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ProductService} from '../../shared/service/product..service';

@Component({
  selector: 'app-editcreate',
  templateUrl: './editcreate.component.html',
  styleUrls: ['./editcreate.component.scss']
})
export class EditcreateComponent implements OnInit {


  productForm: FormGroup;
 idEdit: any;


  constructor(private formBuilder: FormBuilder
             ){




  }

  ngOnInit(): void {



    this.productForm=this.formBuilder.group(
      {
        // description:['',[Validators.required,Validators.minLength(3)]],
        enable:'',
        name:'',
        stock:'',
        type:'',
        urlImage:''
      }
    );
  }




}
