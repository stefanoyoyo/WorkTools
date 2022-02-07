import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {

  choosenOption = -1;
  options = [
    'Add to each objects',
    'Delete from each objects',
    'Edit from each objects',
  ];

  input = '';
  jsonValue: object[] = [];

  constructor() { }

  ngOnInit() {
  }

  onKey(event) {
    this.jsonValue = JSON.parse(this.input);
    console.log(this.jsonValue)
  }

}