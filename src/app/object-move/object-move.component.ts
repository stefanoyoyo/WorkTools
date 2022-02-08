import { Component, Input, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

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
    const keys = pathToEdit.split('.');

    /*saving the object to move */
    const objs: object[] = this.getEachObjects(input, keys);

    /*deleting the object from ech object */
    const removed = this.removeFromObjects(input, keys)

    /*writing saved objects to the input json */
    const result = this.writeObjects(removed, objs)

    console.log(pathToEdit);
  }

  // #region get objects

  /**Geting an array of the object to be moved */
  getEachObjects(input: any, keys: string[]): object[] {
    const objs: object[] = [];
    input.forEach((obj, index) => {
      const innerobj = this.getObj(obj, keys);
      objs.push(innerobj);
    })

    return objs;
  }

  /**Method to get the object by scraping using the keys */
  getObj(obj, keys): object {
    let res = obj;
    keys.forEach(key => {
      res = res[key];
    })

    return res;
  }

  // #endregion

  // #region delete ObjectUnsubscribedError

  /**deleting all objects to be replaced */
  removeFromObjects(input, keys): object[] {
    const objs: object[] = [];
    input.forEach((obj, index) => {
      const last = keys[keys.length -1]
      delete this.getObj(obj, keys.slice(0, keys.length -1))[last];
    })

    return input;
  }
  

  // #endregion

  // #region writing the removed objects


  getLastKey() {
    const keyss = this.pathToEdit.replace('./', '').split('.');
    const lastkey = keyss[keyss.length-1];
    return lastkey;
  }

  writeObjects(removed: object[], objs: object[]) {
    const resultPath = this.changeToApply.replace('./', '')
    const keys = resultPath.split('.');

    // getting last key which is the name of the path to add
    const lastkey = this.getLastKey();

    // ocrreggere! adesso scrive al primo livello dell'oggetto
    for(let index = 0; index < removed.length; index++) {
      let level = removed[index];
      let leaf = null;
      if (keys != null) {
        keys.forEach((key) => {
          level = level[key];
        })
      } 
      console.log(`leaf ${leaf}`);
      level[lastkey] = objs[index];
    }

    console.log('removed')
    console.log(removed)
  }



  // #endregion

}