import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ProductService} from '../../shared/service/product..service';
import {AuthService} from '../../shared/service/auth..service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input()  name: string;
  @Input()  stock: number;
  @Input()  enable: string;
  @Input()  image: string;
  @Input()  id:number;

  constructor(){
  }
  ngOnInit() {
  }

}
