import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-full-image-overlay',
  templateUrl: './sh-full-image-overlay.component.html',
  styleUrls: ['./sh-full-image-overlay.component.css']
})
export class ShFullImageOverlayComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }

}
