import {Component,OnInit} from '@angular/core'
import { AppComponentService } from  './app.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
templateUrl: './albums.component.html',
styleUrls: ['./app.component.css']
})
export class AlbumsComponent implements OnInit
{
albumsId:any;
albumDetails=[];
constructor(private appComponentService:AppComponentService, private route:ActivatedRoute,private router: Router) {
}

    ngOnInit() {
      this.albumsId = this.route.snapshot.params['id'];
      this.getAlbumDetails(this.albumsId);
   }
   
getAlbumDetails(id:number) {
    this.appComponentService.getAlbumDetails(id).subscribe(albumDetails=>this.albumDetails=
    albumDetails);
 }
  onExit(): void {
        this.router.navigate(['/users']);
    }
}