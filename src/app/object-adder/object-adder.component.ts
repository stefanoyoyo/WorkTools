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

    const nameToAdd = this.pathToEdit.replace('./', '') 
    let inputValues = JSON.parse(this.input);
    const fieldValues = JSON.parse(this.fieldValues);
    const added = this.addValues(nameToAdd, inputValues, fieldValues );
    console.log('added')
    console.log(added)

  }

/**Method adding the specified values to the output json */
addValues(nameToAdd: string, inputValues: object[], fieldValues: object[]){
  if (!this.isValuesArray()) { return null; }
  console.log(fieldValues)
  for(let i = 0; i < inputValues.length; i++) {
    const value = fieldValues[i];
    inputValues[i][nameToAdd] = i <= fieldValues.length ? value : '';  
  }

  return inputValues;
}

isValuesArray() {
  if (this.fieldValues == null) { return false; }
  if (this.fieldValues.charAt(0) !== '[') { return false; }
  const pseudoarr = JSON.parse(this.fieldValues);
  return pseudoarr != null;
}

}