import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  AfterViewInit,
} from '@angular/core';
import { IIpc } from '../../models/ipc';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import { format, parseISO } from 'date-fns';
import { IpcService } from './../../services/ipc.service';

@Component({
  selector: 'show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.scss']
})
export class ShowChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() chartData!: IIpc[];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Options = {};


  constructor(
    private _IpcService: IpcService
  ) {}

  ngAfterViewInit(): void{
    this.Highcharts.setOptions(this.chartOptions);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Chart data', changes['chartData']);
    if (changes['chartData'].currentValue) {
        this.loadChart();
    }
  }

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart(): void {
    const series = this.getData(this.chartData, 'series'); // Y Axis
    const categories = this.getData(this.chartData, 'categories'); // X Axis

    this.chartOptions = {
      chart: {
        type: 'areaspline',
        zoomType: 'xy',
      },
      mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: true,
        enableDoubleClickZoom: true,
        mouseWheelSensitivity: 1.5,
        enableTouchZoom: true
      },
      title: {
         text: 'Indice de Precios y Cotizaciones (IPC)'
      },
      xAxis:{
        categories,
        title: {
          text: 'Time: ' + format(parseISO(this.chartData[0].date), 'dd/MM/yyyy'),
          style: {
            fontSize: '18px'

          }
        },
        type: 'datetime',
        zoomEnabled: true,
        max: categories.length - 1,
         
      },
      yAxis: {          
        title:{
          text:'Price',
          style: {
            fontSize: '18px'
          }
        },
        min:  Math.min(...series),
        max: Math.max(...series),
        zoomEnabled: true,

      },
      tooltip: {
        valueSuffix:' ',
        formatter: function() {
        const data = this.point.series.options.custom || {};

        if (!data || !Object.keys(data).length) {
          return `<b>Price: </b>${this.point.y}`;
        }

        const item = data['allData'].filter((item: IIpc) => item.price === this.point.y)[0];
        return `<b>Date:</b> ${format(parseISO(item.date), 'hh:mm:ss:m')}<br/>
        <b>Price:</b> ${item.price}<br/>
        <b>Volume:</b> ${item.volume}<br/>
        <b>Percentage Change:</b> ${item.percentageChange}<br/>
        <b>change:</b> ${item.change}`;

        },
      },
      series: [
        {
          type: 'areaspline',
          name: 'Price',
          data: series,
          custom: {
            allData: this.chartData
          }
        },
      ],

    };

  }

  getData(data: IIpc[], param: string): Array<any> {
    return this._IpcService.getData(data, param);
  }

}
