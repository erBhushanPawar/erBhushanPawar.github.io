import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-text-post',
  templateUrl: './sh-text-post.component.html',
  styleUrls: ['./sh-text-post.component.css']
})
export class ShTextPostComponent implements OnInit {
  @Input() card: any = {}
  constructor() { }

  ngOnInit() {
  }

}
