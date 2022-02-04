import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  input = '';
  jsonValue: object[] = [];

  noDescr = 'No description'

  onKey(event) {
    this.jsonValue = JSON.parse(this.input);
    console.log(this.jsonValue)
  }

}
