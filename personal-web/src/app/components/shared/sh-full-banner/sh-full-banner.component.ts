import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sh-full-banner',
  templateUrl: './sh-full-banner.component.html',
  styleUrls: ['./sh-full-banner.component.css']
})
export class ShFullBannerComponent implements OnInit {
  @Input() banner: any = {}
  constructor() { }

  ngOnInit() {
  }

}
