import {Http, Response} from '@angular/http'
import { Component,OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AppComponentService } from  './app.service';
 
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
   data= [];
     constructor(private appComponentService:AppComponentService) {
    }
    
    ngOnInit() {
    this.appComponentService.getUserDetails().subscribe(data=>this.data=data);
    }
}