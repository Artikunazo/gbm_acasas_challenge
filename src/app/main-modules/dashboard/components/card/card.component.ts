import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public link: string = '';
  @Input() public linkText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
