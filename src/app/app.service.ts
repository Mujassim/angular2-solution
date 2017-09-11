import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class AppComponentService {
    constructor(private http:Http) {
    }
    responseData(res:Response)
    {
        return res.json();
    }
   getUserDetails():Observable<Array<any>>{ 
      return this.http.request('http://jsonplaceholder.typicode.com/users').map(this.responseData) ;
   }
}