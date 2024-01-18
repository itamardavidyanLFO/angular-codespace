import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FirstErrorHandler } from '../error-handlers';

@Component({
  selector: 'app-first-component',
  template: '<h1>FirstComponent</h1>',
  providers: [
    { provide: ErrorHandler, useClass: FirstErrorHandler }
  ]
})
export class FirstComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('FirstComponent.');
  }
}
