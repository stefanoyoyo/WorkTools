import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-calculator',
  templateUrl: './time-calculator.component.html',
  styleUrls: ['./time-calculator.component.css']
})
export class TimeCalculatorComponent implements OnInit {

  left = '';
  right = '';

  result = '';

  constructor() { }

  ngOnInit() {
  }

}