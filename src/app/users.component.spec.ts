import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponentService } from  './app.service';
import {HttpModule,ResponseOptions} from '@angular/http';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
       imports: [
        HttpModule,RouterTestingModule
      ],
       providers:[AppComponentService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});