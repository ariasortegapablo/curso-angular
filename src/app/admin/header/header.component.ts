import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/service/auth..service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalStock: number;
  national: number;
  international: number;

  constructor() { }

  ngOnInit(): void {
    this.totalStock=0;
    this.national=0;
    this.international=0;
  }



}
