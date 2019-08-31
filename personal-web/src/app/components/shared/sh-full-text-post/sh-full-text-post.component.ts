import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-full-text-post',
  templateUrl: './sh-full-text-post.component.html',
  styleUrls: ['./sh-full-text-post.component.css']
})
export class ShFullTextPostComponent implements OnInit {
  @Input() textPost: any = {};
  constructor() { }

  ngOnInit() {
  }

}
