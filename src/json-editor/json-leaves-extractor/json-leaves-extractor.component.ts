import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-leaves-extractor',
  templateUrl: './json-leaves-extractor.component.html',
  styleUrls: ['./json-leaves-extractor.component.css']
})
export class JsonLeavesExtractorComponent implements OnInit {

  @Input() input;

  pathToEdit = './';

  fieldValues = '';

  result = '';

  constructor() { }

  ngOnInit() {
  }

  // #region events

  onKeyUp() {
    console.log('TODO: controllare perchè NON VIENE CHIAMATO questo metodo')
    const asObj = JSON.parse(this.input);
    console.log('asObj')
    console.log(asObj)
    const result = this.getLeaves(this.input);
    this.result = JSON.stringify(result); 
  }

  // #endregion

  getLeaves(jsonObj) {
    let leaves = [];
    
    // controlla se l'oggetto è un array
    if (Array.isArray(jsonObj)) {
      for (let i = 0; i < jsonObj.length; i++) {
        // se l'elemento corrente è un array o un oggetto, chiama ricorsivamente getLeaves
        if (typeof jsonObj[i] === 'object') {
          leaves = leaves.concat(this.getLeaves(jsonObj[i]));
        }
      }
    }
    // controlla se l'oggetto è un oggetto JSON
    else if (typeof jsonObj === 'object') {
      for (let key in jsonObj) {
        // se il valore corrente è un array o un oggetto, chiama ricorsivamente getLeaves
        if (typeof jsonObj[key] === 'object') {
          leaves = leaves.concat(this.getLeaves(jsonObj[key]));
        } 
        // se il valore corrente non è un oggetto, lo aggiunge all'array leaves
        else {
          leaves.push(jsonObj[key]);
        }
      }
    }
    
    return leaves;
  }

  

}