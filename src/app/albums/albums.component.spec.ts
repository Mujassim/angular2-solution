import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsComponent } from './albums.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponentService } from  '../app.service';
import {HttpModule,ResponseOptions} from '@angular/http';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
       imports: [
        HttpModule,RouterTestingModule
      ],
       providers:[AppComponentService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});