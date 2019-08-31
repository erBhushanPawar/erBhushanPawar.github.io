import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-image-overlay',
  templateUrl: './sh-image-overlay.component.html',
  styleUrls: ['./sh-image-overlay.component.css']
})
export class ShImageOverlayComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }

}
