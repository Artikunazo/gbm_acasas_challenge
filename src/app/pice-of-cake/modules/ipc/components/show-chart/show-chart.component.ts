import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  ViewChild 
} from '@angular/core';
import { IIpc } from '../../models/ipc';
import { BaseChartDirective  } from 'ng2-charts';
import { 
  CandlestickController, 
  CandlestickElement, 
  OhlcController, 
  OhlcElement 
} from 'chartjs-chart-financial';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { enUS } from 'date-fns/locale';
import 'chartjs-adapter-moment';

@Component({
  selector: 'show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.scss']
})
export class ShowChartComponent implements OnInit, OnChanges {
  @Input() chartData: any = {
    initialDate: '',
    collection: []
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public initialDateStr = this.chartData.initialDate;
  public financialChartData: ChartConfiguration['data'] = {
    datasets: [ {
      label: 'IPC',
      data: this.chartData.collection,
    } ]
  };
  public financialChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        time: {
          unit: 'minute'
        },
        adapters: {
          date: {
            locale: enUS
          }
        },
        ticks: {
          source: 'auto'
        }
      }
    }
  };
  public financialChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public financialChartLegend = true;
  public financialChartType: ChartType = 'candlestick';
  public barChartPlugins = [];

  constructor() {
    Chart.register(CandlestickController, OhlcController, CandlestickElement, OhlcElement);
   }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['chartData'].currentValue) {
    //   this.chartData = changes['chartData'].currentValue;
    // }
  }

  ngOnInit(): void {
    
  }

}
