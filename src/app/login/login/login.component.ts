import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  sw=true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
   onLogin() : void{
    console.log(this.username);
    console.log(this.password);
   }
  onLogin2(form) : void{
    console.log(form.value);
    this.router.navigate(['/pages'])
  }
}
