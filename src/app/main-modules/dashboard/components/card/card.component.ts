import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() linkText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}