import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpParams} from '@angular/common/http';
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

    getAlbumDetails(userId:number):Observable<Array<any>>{ 
       return this.http.request(`http://jsonplaceholder.typicode.com/users/${userId}/albums`)
       .map(this.responseData);
   }
   getPhotoDetails(albumId:number):Observable<Array<any>>{ 
       return this.http.request(`http://jsonplaceholder.typicode.com/albums/${albumId}/photos/`).map((res:Response) => res.json()) ;
   }
}