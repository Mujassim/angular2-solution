import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule}  from '@angular/router';
import { HttpModule,ConnectionBackend,Http}      from '@angular/http';
import { UsersComponent }   from './users.component';
import { AppComponent }   from './app.component';
import {AlbumsComponent} from '../app/albums/albums.component';
import {PhotosComponent} from '../app/photos/photos.component';
import {AppRoutingModule} from './app-routing.module';
import { AppComponentService } from  './app.service';
import {FormsModule} from '@angular/forms';
 
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [ AppComponent,AlbumsComponent,UsersComponent,PhotosComponent],
  providers:[AppComponentService],
  bootstrap:    [ AppComponent]
})
export class AppModule { }