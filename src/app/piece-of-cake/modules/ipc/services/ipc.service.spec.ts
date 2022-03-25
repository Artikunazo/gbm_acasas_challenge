import { IpcService } from './ipc.service';
import { ConnectorService } from '../../core/services/connector/connector.service';
import { environment } from '@environment/environment';
import { of } from 'rxjs';


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

});
