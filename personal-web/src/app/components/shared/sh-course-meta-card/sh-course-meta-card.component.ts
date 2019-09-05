import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-course-meta-card',
  templateUrl: './sh-course-meta-card.component.html',
  styleUrls: ['./sh-course-meta-card.component.css']
})
export class ShCourseMetaCardComponent implements OnInit {
  @Input() card: any = {}
  constructor() { }

  ngOnInit() {
  }

}
