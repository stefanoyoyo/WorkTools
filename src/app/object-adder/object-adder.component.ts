import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-adder',
  templateUrl: './object-adder.component.html',
  styleUrls: ['./object-adder.component.css']
})
export class ObjectAdderComponent implements OnInit {

  @Input() input;

  pathToEdit = './';

  fieldValues = '';

  result = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    const input = JSON.parse(this.input);
    const isArray = Array.isArray(input);
    let result = null; 

    if (isArray) {
      result = null;
    } else {
      result = null;
    }

  }

}