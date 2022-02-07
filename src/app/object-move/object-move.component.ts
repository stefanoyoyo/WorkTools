import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-move',
  templateUrl: './object-move.component.html',
  styleUrls: ['./object-move.component.css']
})
export class ObjectMoveComponent implements OnInit {

  @Input() input = '';

  pathToEdit = './';
  changeToApply = './';

  constructor() { }

  ngOnInit() {
  }
  onKeyUp() {
    console.log('fire')
    const input = JSON.parse(this.input);
    const isArray = Array.isArray(input);
    let result = null; 

    if (isArray) {
      result = this.moveArray(input);
    } else {
      result = null;
    }

  }

  moveArray(input) {
    const pathToEdit = this.pathToEdit.replace('./', '');
    const keys = Object.keys(pathToEdit);

    /*saving the object to move */
    const objs = getEachObject(input, keys);

    /*deleting the object from ech object */

    /*writing saved objects to the input json */

    console.log(pathToEdit);
  }

  /**Geting an array of the object to be moved */
  getEachObject(input: any, keys: string[]) {
    const objs: string[] = [];
    input.forEach((obj, index) => {
      const obj = getObj(obj, keys);
      objs.push(obj);
    })

    return objs;
  }

}