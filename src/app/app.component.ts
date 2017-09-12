import {Http, Response} from '@angular/http'
import { Component,OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AppComponentService } from  './app.service';
import { Router } from '@angular/router';
 
@Component({
selector: 'app-root',
template:'<router-outlet></router-outlet>',
styleUrls: ['./app.component.css']
})
export class AppComponent {
}