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
import { TimeCalculatorComponent } from '../time-calculator/time-calculator.component';

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
    TimeCalculatorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
