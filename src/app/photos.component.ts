import {Component,OnInit} from '@angular/core'
import { AppComponentService } from  './app.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
templateUrl: './photos.component.html',
styleUrls: ['./app.component.css']
})
export class PhotosComponent implements OnInit
{
albumId:any;
photoDetails=[];
constructor(private appComponentService:AppComponentService, private route:ActivatedRoute,private router: Router) {
}

    ngOnInit() {
      this.albumId = this.route.snapshot.params['albumId'];
      this.getPhotoDetails(this.albumId);
   }
   
getPhotoDetails(albumId:number) {
    this.appComponentService.getPhotoDetails(albumId).subscribe(photoDetails=>this.photoDetails=
    photoDetails);
 }
 onExit(): void {
        this.router.navigate(['/users']);
    }
}