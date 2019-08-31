import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sh-full-image-card',
  templateUrl: './sh-full-image-card.component.html',
  styleUrls: ['./sh-full-image-card.component.css']
})
export class ShFullImageCardComponent implements OnInit, OnChanges {
  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('on changes', this.card)
  }

}
