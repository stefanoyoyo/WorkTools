import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-field-value',
  templateUrl: './change-field-value.component.html',
  styleUrls: ['./change-field-value.component.css']
})
export class ChangeFieldValueComponent implements OnInit {

  @Input() input = '';

  pathToDelete = '';
  changeToApply = '';
  selectedValue = -1;

  options = [
    '---No value---',
    'uuuId'
  ]

  output = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
  }

  onSelectChange() {
    if (this.selectedValue === 0) { return; }
    this.changeToApply =  `***COMMAND_${this.options[this.selectedValue]}***`;
    const output = this.writeAllValues();
  }

  // #region uuuids

  writeAllValues() {
    /*
      conto nella stringa il numero di valori da sostituire.
      genero lo stesos numero di valori che li andranno a sostituire.
      li sostituisco.
     */
    const numOccurrences = -1;
    const uuuids: string[] =  this.getSubstituteValues(numOccurrences) 
    const output = this.replaceValues(uuuids);
    return output;
  }

  /**Rimpiazzo i valori vecchi con quelli specificati come parametro  */
  replaceValues(uuuids: string[]) {
    throw new Error('Method not implemented.');
  }

  /**Ottengo i valori da rimpiazzare al posto dei valori vecchi */
  getSubstituteValues(numOccurrences) {
    let values = [];
    switch(this.selectedValue) {
      case 1: 
      values  = this.getUUUids(numOccurrences);
      break;
    }
    return values;
  }

  /**making an array of uuuid given having the same specified length */
  getUUUids(numOccurrences: any): any[] {
    throw new Error('Method not implemented.');
  }

  // #endregion

}