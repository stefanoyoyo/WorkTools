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

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {

  }
}