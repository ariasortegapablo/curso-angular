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
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit, OnChanges, DoCheck
  , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  @Input() name:string

  constructor() {
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
