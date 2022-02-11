import { ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-field-value',
  templateUrl: './change-field-value.component.html',
  styleUrls: ['./change-field-value.component.css']
})
export class ChangeFieldValueComponent implements OnInit {

  @Input() input = '';

  fieldToChange = '';
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

  /*
    conto nella stringa il numero di valori da sostituire.
    genero lo stesos numero di valori che li andranno a sostituire.
    li sostituisco.
  */
  writeAllValues() {
    const numOccurrences = this.substringOccurrencesNumber(this.input, this.fieldToChange);
    const uuuids: string[] =  this.getSubstituteValues(numOccurrences);
    const output = this.replaceValues(uuuids);
    return output;
  }

  /**Rimpiazzo i valori vecchi con quelli specificati come parametro  */
  replaceValues(uuuids: string[]) {
    throw new Error('Method not implemented.');
  }

  /**Ottengo i valori da rimpiazzare al posto dei valori vecchi */
  getSubstituteValues(numOccurrences: number) {
    let values: string[] = [];

    /* PER MOTIVI IGNOTI, NON FUNZIONA! CAPIRE PERCHE! */
    /* SENZA QUESTO SWITCH NON POSSO PERMETTERE AL COMPONENTE DI 
       SOSTITUIRE IN PIU' MODI IL VALORE  */
    // switch(this.selectedValue) {
    //   case 1: 
    //     console.log('fire') // NON entro qui! 
    //     values  = this.getUUUids(numOccurrences);
    //     break;
    // }

    values  = this.getUUUids(numOccurrences);

    return values;
  }

  /**making an array of uuuid given having the same specified length */
  getUUUids(numOccurrences: number): any[] {
    const uuuids: string[] = [];
    for(let i = 0; i < numOccurrences; i++) {
      uuuids.push(this.generateUUID());
    }
    return uuuids;
  }


  generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

  // #endregion

  // #region string ɵHttpInterceptingHandler

    /**Metodo che ritorna il numero di volte che una sottostringa è contneuta in una stringa 
   * @param word contente le sottostringhe da contare
   * @param subword sottostringa da contare
   */
  substringOccurrencesNumber(word, subword) {
    let num = -1;
    const arr = word.split(subword);
    num = arr.length - 1;
    return num;
  }

  // #endregion

}