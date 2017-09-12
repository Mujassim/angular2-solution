import {Http, Response} from '@angular/http'
import { Component,OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AppComponentService } from  './app.service';
import { Router } from '@angular/router';
 
@Component({
selector: 'user-list',
templateUrl: './user.list.html',
styleUrls: ['./app.component.css']
})
export class UsersComponent  implements OnInit{
     data= [];
     constructor(private appComponentService:AppComponentService,private router: Router) {
}

ngOnInit() {
    this.appComponentService.getUserDetails().subscribe(data=>this.data=data);
    }
}