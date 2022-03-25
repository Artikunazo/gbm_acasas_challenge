import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'show-alert',
  templateUrl: './show-alert.component.html',
  styleUrls: ['./show-alert.component.scss']
})
export class ShowAlertComponent implements OnInit {
  @Input() type: string = 'success';
  @Input() message: string = 'Success!';

  constructor() { }

  ngOnInit(): void {
  }

}
