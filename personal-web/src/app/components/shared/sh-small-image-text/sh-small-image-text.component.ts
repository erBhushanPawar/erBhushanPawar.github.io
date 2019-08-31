import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-small-image-text',
  templateUrl: './sh-small-image-text.component.html',
  styleUrls: ['./sh-small-image-text.component.css']
})
export class ShSmallImageTextComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }

}
