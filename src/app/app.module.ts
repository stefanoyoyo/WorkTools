import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JsonDynamicTableComponent } from '../json-dynamic-table/json-dynamic-table.component';
import { JsonEditorComponent } from '../json-editor/json-editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, JsonDynamicTableComponent, JsonEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
