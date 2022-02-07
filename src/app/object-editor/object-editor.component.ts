import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-editor',
  templateUrl: './object-editor.component.html',
  styleUrls: ['./object-editor.component.css']
})
export class ObjectEditorComponent implements OnInit {

  @Input() input;

  pathToEdit = './';
  changeToApply = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {

  }

}