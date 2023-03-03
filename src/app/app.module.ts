import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JsonDynamicTableComponent } from '../json-dynamic-table/json-dynamic-table.component';
import { JsonEditorComponent } from '../json-editor/json-editor.component';
import { ObjectAdderComponent } from './object-adder/object-adder.component';
import { ObjectEditorComponent } from './object-editor/object-editor.component';
import { ObjectDeleterComponent } from './object-deleter/object-deleter.component';
import { ObjectMoveComponent } from './object-move/object-move.component';
import { ChangeFieldValueComponent } from './change-field-value/change-field-value.component';
import { TimeManagerComponent } from '../time-manager/time-manager.component';
import { TimeCalculatorComponent } from './time-calculator/time-calculator.component';
import { JsonLeavesExtractorComponent } from '../json-editor/json-leaves-extractor/json-leaves-extractor.component';
import { JsonLeavesService } from './services/json-leaves.service';
import { JsonLeavesReplacerComponent } from '../json-editor/json-leaves-replacer/json-leaves-replacer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    JsonDynamicTableComponent, 
    JsonEditorComponent, 
    ObjectAdderComponent, 
    ObjectEditorComponent,
    ObjectDeleterComponent,
    ObjectMoveComponent,
    ChangeFieldValueComponent,
    TimeManagerComponent,
    TimeCalculatorComponent,
    JsonLeavesExtractorComponent,
    JsonLeavesReplacerComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    JsonLeavesService
  ]
})
export class AppModule { }
