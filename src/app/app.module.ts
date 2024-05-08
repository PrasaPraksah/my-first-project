import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileeditorComponent } from './profileeditor/profileeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileeditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
