import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { IIpc } from '../../models/ipc.model';
import { IpcService } from '../../services/ipc.service';
import { of } from 'rxjs';
// import { IpcDataMock } from '@common/ipc.mock';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let ipcServiceSpy: jasmine.SpyObj<IpcService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [
        {
          provide: IpcService,
          useValue: ipcServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    ipcServiceSpy = jasmine.createSpyObj('IpcService', [
      'getIpcData'
    ]);

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Should call service to get data', () => {
  //   ipcServiceSpy.getIpcData.and.callFake(() => of(IpcDataMock));

  //   component.getIpcData();
  //   fixture.detectChanges();

  //   expect(ipcServiceSpy.getIpcData).toHaveBeenCalled();
  // });

  // it('Should chartData must be defined',  () => {
  //   ipcServiceSpy.getIpcData.and.callFake(() => of(IpcDataMock));
  //   ipcServiceSpy.getIpcData.and.returnValue(of(IpcDataMock));

  //   component.getIpcData();
  //   fixture.detectChanges();

  //   expect(component.chartData).toEqual(IpcDataMock);
  // });

});

const IpcDataMock = [
  {
    "date": "2020-08-18T00:01:43.633-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:01:43.657-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:02:43.91-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:02:43.933-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:03:44.173-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:03:44.2-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:04:44.457-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:04:44.48-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:05:44.76-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:05:44.787-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:06:45.033-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:06:45.06-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:07:45.577-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:07:45.603-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:08:45.957-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:08:45.98-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T00:09:46.253-05:00",
    "price": 39285.85,
    "percentageChange": 0.86257,
    "volume": 128684937,
    "change": 335.97
  },
  {
    "date": "2020-08-18T04:08:46.217-05:00",
    "price": 39142.98,
    "percentageChange": -0.36,
    "volume": 12021898,
    "change": -142.87
  },
  {
    "date": "2020-08-18T04:09:17.843-05:00",
    "price": 39139.27,
    "percentageChange": -0.37,
    "volume": 12144322,
    "change": -146.58
  },
  {
    "date": "2020-08-18T04:09:48.11-05:00",
    "price": 39130.83,
    "percentageChange": -0.39,
    "volume": 12705502,
    "change": -155.02
  },
  {
    "date": "2020-08-18T04:10:19.063-05:00",
    "price": 39108.88,
    "percentageChange": -0.45,
    "volume": 13030223,
    "change": -176.97
  },
  {
    "date": "2020-08-18T04:10:50.06-05:00",
    "price": 39123.1,
    "percentageChange": -0.41,
    "volume": 13219802,
    "change": -162.75
  },
  {
    "date": "2020-08-18T04:11:21.06-05:00",
    "price": 39117.84,
    "percentageChange": -0.43,
    "volume": 13305336,
    "change": -168.01
  },
  {
    "date": "2020-08-18T04:11:52.06-05:00",
    "price": 39113.98,
    "percentageChange": -0.44,
    "volume": 13355546,
    "change": -171.87
  },
  {
    "date": "2020-08-18T04:12:23.06-05:00",
    "price": 39101.7,
    "percentageChange": -0.47,
    "volume": 13606767,
    "change": -184.15
  },
  {
    "date": "2020-08-18T04:12:54.067-05:00",
    "price": 39106.77,
    "percentageChange": -0.46,
    "volume": 13725315,
    "change": -179.08
  },
  {
    "date": "2020-08-18T04:13:25.063-05:00",
    "price": 39100.58,
    "percentageChange": -0.47,
    "volume": 13786034,
    "change": -185.27
  }
];
