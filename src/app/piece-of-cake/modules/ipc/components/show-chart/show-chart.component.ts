import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  AfterViewInit,
} from '@angular/core';
import { Options } from 'highcharts';
import { format, parseISO } from 'date-fns';
import * as Highcharts from 'highcharts';
import { IIpc } from '../../models/ipc.model';
import { IpcService } from './../../services/ipc.service';

@Component({
  selector: 'show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.scss']
})
export class ShowChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() chartData: IIpc[] = [];

  Highcharts = Highcharts;
  chartOptions: Options = {};


  constructor(
    private _IpcService: IpcService
  ) {}

  ngAfterViewInit(): void{
    this.Highcharts.setOptions(this.chartOptions);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'].currentValue) {
        this.loadChart();
    }
  }

  ngOnInit(): void {
    this.loadChart();
  }

  /**
   * Method to initialize the chart
   */
  loadChart(): void {
    /**
     * Series array is used to show the data in the chart in Y Axis
     */
    const series = this.getParamGroup(this.chartData, 'series');
    
    /**
     * Categories array is used to show the data in the chart in X Axis
     */
    const categories = this.getParamGroup(this.chartData, 'categories');

    this.loadChartOptions(series, categories);
  }

  /**
   * Load chart options to render the chart
   */
  loadChartOptions(series: number[], categories: string[]): void {

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
        max: categories.length - 1 || 0,
         
      },
      yAxis: {          
        title:{
          text:'Price',
          style: {
            fontSize: '18px'
          }
        },
        min:  Math.min(...series) || 0,
        max: Math.max(...series) || 0,
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
          data: series || [],
          custom: {
            allData: this.chartData
          }
        },
      ],

    };
  }

  /**
   * Method to get the group of data from the chartData
   * @param data 
   * @param param the param to get the value
   * @returns Array of values
   */
  getParamGroup(data: IIpc[], param: string): Array<any> {
    return this._IpcService.getParamGroup(data, param);
  }

}
