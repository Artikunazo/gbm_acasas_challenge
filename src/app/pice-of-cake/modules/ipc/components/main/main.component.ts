import { Component, OnInit } from '@angular/core';
import { IIpc } from '../../models/ipc';
import { IpcService } from '../../services/ipc.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chartData = [];

  constructor(
    private _ipcService: IpcService
  ) { }

  ngOnInit(): void {
    this.getIpcData();
  }

  getIpcData(): void {
    this._ipcService.getIpcData().subscribe(
      (data: any) => {
        this.chartData = data;
      }
    );
  }

}
