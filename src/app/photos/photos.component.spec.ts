import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponentService } from  '../app.service';
import {HttpModule,ResponseOptions} from '@angular/http';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
       imports: [
        HttpModule,RouterTestingModule
      ],
       providers:[AppComponentService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});