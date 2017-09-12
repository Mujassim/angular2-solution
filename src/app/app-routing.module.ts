import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }    from './users.component';
import { AlbumsComponent }  from '../app/albums/albums.component';
import { PhotosComponent }  from '../app/photos/photos.component';

const usersRoutes: Routes = [
 { path: 'users',  component: UsersComponent },
 { path: 'users/:id', component: AlbumsComponent},
  { path: 'users/:id/albums/:albumId', component: PhotosComponent},
 { path: '', redirectTo: 'users', pathMatch: 'full' }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }