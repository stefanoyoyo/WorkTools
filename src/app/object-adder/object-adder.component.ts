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

  constructor() { }

  ngOnInit() {
  }

}