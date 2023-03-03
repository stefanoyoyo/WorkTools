import { Component, Input, OnInit } from '@angular/core';
import { JsonLeavesService } from '../../app/services/json-leaves.service';

@Component({
  selector: 'app-json-leaves-replacer',
  templateUrl: './json-leaves-replacer.component.html',
  styleUrls: ['./json-leaves-replacer.component.css']
})
export class JsonLeavesReplacerComponent implements OnInit {
  _input:string;
  @Input() set input(param:string) {
    if (param === '') return; 
    const asObj = JSON.parse(param);
    const result = this.jsonLeaves.getLeaves(asObj); 
    console.log('result')
    console.log(result)
    this.result = JSON.stringify(result);
    this._input = this.result;
  }

  replacementLeaves: string[];

  pathToEdit = './';

  fieldValues = '';

  result = '';

  constructor(private jsonLeaves: JsonLeavesService) { }

  ngOnInit() {
  }

}