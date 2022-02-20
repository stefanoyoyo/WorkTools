import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  selFunct = -1;
  functions = [ 
    'Dynamic table based on JSON', 
    "Json editor",
    "Date and time utilities"
  ];

  onSel(event) {
    this.selFunct = event;
  }

}
