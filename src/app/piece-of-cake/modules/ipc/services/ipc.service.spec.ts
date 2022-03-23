import { TestBed } from '@angular/core/testing';
import { IpcService } from './ipc.service';
import { ConnectorService } from '../../core/services/connector/connector.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { of } from 'rxjs';
import { IpcDataMock } from '@common/ipc.mock';


describe('IPC Service Testing', () => {
  let service: IpcService;
  let connectorServiceSpy: jasmine.SpyObj<ConnectorService>;

  beforeEach(() => {
    connectorServiceSpy = jasmine.createSpyObj('ConnectorService', [
      'mGet',
      'clearData',
      'getParamGroup'
    ]);

    service = new IpcService(
      connectorServiceSpy
    );
  });

  it('Should be created', () => {
    expect(service).toBeDefined();
  });

  it('Should call to API', () => {
    connectorServiceSpy.mGet.and.callFake(() => of([{}]));

    const url = environment.apiUrl;
    service.getIpcData();
    expect(connectorServiceSpy.mGet).toHaveBeenCalledWith(url);
  });

  // it('Should return prices array', () => {
  //   const result = IpcDataMock.map(item => item.price);

  //   spyOn(service, 'clearData').and.callFake(() => IpcDataMock);
  //   service.getParamGroup(IpcDataMock, 'series');

  //   expect(service.getParamGroup).toEqual(result);
  // });

  // it('Should clear data getted', () => {
  //   spyOn(service, 'clearData');
  //   service.clearData(IpcDataMock);
  //   expect(service.clearData).toHaveBeenCalled();
  // });

  // it('Should return an empty array', () => {
  //   spyOn(service, 'clearData');
  //   service.clearData(IpcDataMock);
  //   expect(service.clearData).toHaveBeenCalled();
  // });


  // let service: IpcService;
  // let connectorServiceSpy: ConnectorService;
  // let httpClientMock: HttpTestingController;
  // let httpClient: HttpClient;

  // beforeEach(() => {
  //   connectorServiceSpy = jasmine.createSpyObj('ConnectorService', ['get']);
  //   TestBed.configureTestingModule({
  //     imports: [
  //       HttpClientTestingModule
  //     ],
  //     providers: [
  //       IpcService,
  //       {
  //         provide: ConnectorService,
  //         useValue: connectorServiceSpy
  //       }
  //     ]

  //   });
  //   service = TestBed.inject(IpcService);
  //   connectorServiceSpy = TestBed.inject(ConnectorService);
  //   httpClientMock = TestBed.inject(HttpTestingController);
  //   httpClient = TestBed.inject(HttpClient);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('', () => {

  // })
});
