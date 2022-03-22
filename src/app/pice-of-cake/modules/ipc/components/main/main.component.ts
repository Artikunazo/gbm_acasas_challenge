import { Component, OnInit } from '@angular/core';
import { IIpc } from '../../models/ipc.model';
import { IpcService } from '../../services/ipc.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public chartData: IIpc[] = [];

  constructor(
    private _ipcService: IpcService
  ) { }

  ngOnInit(): void {
    this.getIpcData();
  }

  /**
   * Method to get the data from the service
   */
  getIpcData(): void {
    this._ipcService.getIpcData().subscribe({
      next: (data: IIpc[]) => {
        this.chartData = data;
      },
    });
  }

}
