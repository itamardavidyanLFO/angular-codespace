import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<h1>Home</h1>',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    console.log('Home');
  }

}
