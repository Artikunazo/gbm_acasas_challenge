import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { IpcService } from '../../services/ipc.service';


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
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

});
