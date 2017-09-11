import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,ConnectionBackend,Http}      from '@angular/http';
import { AppComponent }   from './app.component';
import { AppComponentService } from  './app.service';
 
@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent],
  providers:[AppComponentService],
  bootstrap:    [ AppComponent]
})
export class AppModule { }