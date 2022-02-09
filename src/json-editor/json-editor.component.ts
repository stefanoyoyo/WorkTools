import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {

  sub: Subscription;

  choosenOption = -1;
  options = [
    'Add to each objects',
    'Edit from each objects',
    'Delete from each objects',
    'Move from each objects',
  ];

  input = '';
  output = '';
  jsonValue: object[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  onKey(event) {
    this.jsonValue = JSON.parse(this.input);
  }

  
  onSel(event) {
    this.choosenOption = event;
  }

}