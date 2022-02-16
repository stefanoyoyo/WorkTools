import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-calculator',
  templateUrl: './time-calculator.component.html',
  styleUrls: ['./time-calculator.component.css']
})
export class TimeCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // #region code

/**Generating all the decimal number between the specified extreemes.  */
generateDecimalSeries(start, end, decimals) {

  const numbers = [];
  const limit = Math.pow(10, decimals);

  // getting the x axis values
  const decimalNumbers = this.getDecimals(limit);

  // Generating the decima for each integer value between the specified range
  let counter = 0;
  for (let index = start; index < end; index++) {
      const element = index;
      
      decimalNumbers.forEach(decimal => {
          const num = `${element}.${decimal}`;
          numbers.push(num);
          ++counter;
      });
  }

  return numbers;
}

/**Getting the series of numbers from 0 until the specified limit.
* @limit number that will stop incrementing and pushing in the array
*/
getDecimals(limit) {
  let num = 0;
  const decimalsNums = [];
  while (num < limit) {
      decimalsNums.push(num);
      ++num;
  }

  return decimalsNums;
}

// #region format the outputFormat

analyzeFormatOutput(outputFormat, series) {
  let output = [];
  const keys = Object.keys(outputFormat);
  keys.forEach(key => {
      if(outputFormat[key] === true) {
          output = this.formatOutput(key, series);
      }
  });

  return output;
}

formatOutput(key, series) {
  let output = []; 
  switch (key) {
      case 'lightningChart':
          output = this.formatLightningChart(series);
          break;
      case 'array':
          output = this.formatAsArray(series);
          break;
  }
  return output; 
}

// #region format lightningChart

/**getting a string including the values to pass to a lightning chart values */
formatLightningChart(series) {
  const values = [];
  series.forEach((element, index) => {
      const arrValue = `\n{ x: ${element}, y: ${index} }`;
      values.push(arrValue);
  });

  return values;
}

//#endregion

// #region format as array

formatAsArray(series) {
  return series; 
}

//#endregion


//#endregion


//#endregion

}