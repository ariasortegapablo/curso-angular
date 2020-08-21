import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1Component } from './shared1/shared1.component';
import { Pipe3Pipe } from './pipe3.pipe';
import { Shared2Directive } from './shared2.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Shared1Component,
    Pipe3Pipe,
    Shared2Directive
  ],
  exports: [
    Shared1Component,
    Pipe3Pipe,
    Shared2Directive
  ]
})
export class SharedModule { }