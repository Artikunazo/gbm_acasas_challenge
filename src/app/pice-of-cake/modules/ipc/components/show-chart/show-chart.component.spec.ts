import { ShowChartComponent } from './show-chart.component';
import { IpcDataMock } from '@common/ipc.mock';
import { IpcService } from './../../services/ipc.service';

describe('ShowChartComponent', () => {
  let component: ShowChartComponent;
  let ipcServiceSpy: jasmine.SpyObj<IpcService>;

  beforeEach(() => {
    ipcServiceSpy = jasmine.createSpyObj('IpcService', [
      'getParamGroup'
    ]);

    ipcServiceSpy.getParamGroup.and.returnValue([]);

    component = new ShowChartComponent(ipcServiceSpy);
    component.chartData = IpcDataMock;

  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should to call loadChart()', () => {
    component.loadChart();

    expect(ipcServiceSpy.getParamGroup).toHaveBeenCalled();
    expect(component.Highcharts).toBeDefined();
  });

  it('Should to ChartOptions to be defined', () => {
    component.loadChart();
    
    expect(component.chartData).toBeTruthy();
  });
  
});
