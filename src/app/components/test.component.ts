import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: "person",
  template:
    `<div style=" border: 1px solid red;">
  <p> TEST</p>


  <p> valor var name: {{name}}</p>
</div>>
`,


})

export class TestComponent implements OnInit, OnChanges, DoCheck
  , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {



  constructor() {
  }

  intermediario:String;
  


  @Input()
  get name(){
    return this.intermediario;
  }
  set name(name){
    this.intermediario=name;
  }

  ngOnInit() {
    console.log('OnInit')
  }
  ngOnChanges() {
    console.log('OnChanges')
  }
  ngDoCheck() {
    console.log('DoCheck')
  }
  ngAfterContentInit() {
    console.log('AfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('AfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }
  ngOnDestroy(){
    console.log('OnDestroy')
  }

}
