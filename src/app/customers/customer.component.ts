import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
  ]
})
export class CustomerComponent implements OnInit {
customer:Customer|undefined
  constructor() { }

  ngOnInit(): void {
  }

  save(){

  }

}
