import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConnectorService } from './connector.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';


describe('ConnectorService', () => {
  let service: ConnectorService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new ConnectorService(
      httpClientSpy
    );
  });

  it('Should be service defined', () => {
    expect(service).toBeDefined();
  });

  it('Should call get method of the HttpClient', () => {
    const url = environment.apiUrl;
    service.mGet(url);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('Should throw Error when Url is empty', () => {
    expect(function() { service.mGet('') }).toThrow(new Error('Url is required'));
  });


  // let service: ConnectorService;
  // let httpClientMock: HttpTestingController;
  // let httpClient: HttpClient;

  // beforeEach(waitForAsync(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       HttpClientTestingModule,
  //     ],
  //     providers: [
  //       ConnectorService
  //     ]
  //   });
  //   service = TestBed.inject(ConnectorService);
  //   httpClientMock = TestBed.inject(HttpTestingController);
  //   httpClient = TestBed.inject(HttpClient);
  // }));

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
