import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpModule,ResponseOptions} from '@angular/http'
import {inject } from '@angular/core/testing';
import { AppComponentService } from  './app.service';
import { MockBackend, MockConnection } from '@angular/http/testing';


describe('AppComponent', () => {
   let subject: AppComponentService = null;
  let backend: MockBackend = null;
  const mockResponse = {
          data: [
            { name: 'Susan', address:'Prague' },
            { name: 'Petr',address:'Brno'  },
            { name: 'Tomas',address:'Pardubice'  },
            { name: 'Jiri',address:'Uvaly'  },
          ]
        };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule
      ],
       providers:[AppComponentService,MockBackend],
    }).compileComponents();
  }));

  beforeEach(inject([AppComponentService, MockBackend], (appComponentService: AppComponentService, mockBackend: MockBackend) => {
    subject=appComponentService;
    backend = mockBackend;
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should connect to the JSON Placeholder`,() => {
     backend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
  });

  it('should return user details from the connected JSON Placeholder',() => {
  subject.getUserDetails().subscribe((userdetails) => {
          expect(userdetails.length).toBe(4);
          expect(userdetails[0].name).toEqual('Susan');
          expect(userdetails[1].name).toEqual('Petr');
          expect(userdetails[2].name).toEqual('Tomas');
          expect(userdetails[3].name).toEqual('Jiri');
        });


  });
});
