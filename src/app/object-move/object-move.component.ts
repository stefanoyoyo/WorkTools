import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-move',
  templateUrl: './object-move.component.html',
  styleUrls: ['./object-move.component.css']
})
export class ObjectMoveComponent implements OnInit {

  @Input() input;

  pathToEdit = './';
  changeToApply = './';

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