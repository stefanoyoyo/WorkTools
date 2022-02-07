import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-deleter',
  templateUrl: './object-deleter.component.html',
  styleUrls: ['./object-deleter.component.css']
})
export class ObjectDeleterComponent implements OnInit {

  @Input() input;

  constructor() { }

  ngOnInit() {
  }

}