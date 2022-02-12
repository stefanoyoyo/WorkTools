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
    
    // Sapendo che il metodo replace in JavaScript sostituisce solo la prima occorrenza
    // ottengo il valore di ogni campo, lo salvo in un array, e per ognuno di quei valori 
    // poi applico una sostituzione con ciò che voglio. 
    const toSubstitue: string[] = this.getTobeSubstitued();
    // console.log('toSubstitue')
    // console.log(toSubstitue)
  }

  
  // #region get values to be substituted

  /**Method getting all the values that will be replaced into the string */
  getTobeSubstitued(): string[] {
    let index = -1; 
    const toBeSubstituted: string[] = [];
    const substrCount = this.substringOccurrencesNumber(this.input, this.fieldToChange);
    for(let i = 0; i<substrCount; i++) {
      index = i+1;
      const fieldIndex = this.getSubstringPosition(this.input, this.fieldToChange, index);
      console.log(fieldIndex)
      const word: string = this.getObjByIndex(this.input, fieldIndex);
      toBeSubstituted.push(word);
    }

    return toBeSubstituted;
  }
  
  /**Getting the field value given the first '"' field's char. */
  getObjByIndex(input: string, fieldIndex: number): string {

    // moving out of the fiels index of '"'
    fieldIndex+= `"${this.fieldToChange}"`.length;

    // looking for the initial index
    while (input[fieldIndex] !== '"') {
      ++fieldIndex;
    }
    const start = fieldIndex;

    // looking for the final index
    while (input[fieldIndex] !== '"') {
      ++fieldIndex;
    }
    const end = fieldIndex-2;

    // getting the word between initial and final indexes
    const word = this.getWordByIndexes(this.input, start, end);
    console.log('word')
    console.log(word)
    return word;
  }
  
  /**Method getting the subword included between the given indexes */
  getWordByIndexes(input: string,start: number,end: number) {
    const noLeftPart = this.splitAtIndex(input, start)[1];
    const noRightPart =  this.splitAtIndex(noLeftPart, end)[0];
    return noRightPart;
  }

  /**Metodo che splitta la stringa passata come parametro all'indice passato come parametro */
  splitAtIndex(value, index) {
    const arr = [];
    arr.push(value.substring(0, index));
    arr.push(value.substring(index));
    return arr;
  }
    

  // #endregion

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

      /**Metodo che permette di ottenere l'indice in cui appare l'occorrenza ennesima della sottostringa nella stirnga. 
       * NOTA: l'indice deve partire SEMPRE da 1! 
     * ESEMPIO: dato
     * "ab ac ab ad ab ae ab af"
     *  • la prima occorrenza di ab si trova all'indice 0
     *  • la seconda occorrenza di ab si trova all'indice 3
     *  • la terza occorrenza di ab si trova all'indice 5
     *  • ecc..
     */
    getSubstringPosition(bbcode, subString, index): number {
      return bbcode.split(subString, index).join(subString).length;
    }

  // #endregion

}