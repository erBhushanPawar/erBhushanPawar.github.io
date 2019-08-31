import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() cardsData: [] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.cardsData)
  }
}
