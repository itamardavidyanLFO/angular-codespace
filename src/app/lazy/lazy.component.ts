import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: '<h1>LazyComponent</h1>',
})
export class LazyComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('LazyComponent.');
  }
}
