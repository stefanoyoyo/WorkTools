import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-move',
  templateUrl: './object-move.component.html',
  styleUrls: ['./object-move.component.css']
})
export class ObjectMoveComponent implements OnInit {

  @Input() input;

  constructor() { }

  ngOnInit() {
  }

}