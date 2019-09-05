import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DalService } from 'src/app/services/dal.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: any = {}

  constructor(private route: ActivatedRoute, private dal: DalService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.dal.getCourses(`/courses/${x.title}`).subscribe(y => {

        this.course = y.length ? y[0] : y;
        console.log(this.course)
        if (this.course.imageUrl) {
          let splitted = this.course.imageUrl.split('/');
          let ind = splitted.indexOf('max');
          if (ind !== -1) {
            splitted[ind + 1] = window.innerWidth;
            this.course.imageUrl = splitted.join('/')
          } else {
            this.course.imageUrl = this.course.imageUrl.split('&').map(x => { x = x.split('='); if (x[0] === 'w') { x[1] = window.innerWidth; } return `${x[0]}=${x[1]}`; }).join('&')
          }
        }
      })
    })
  }

}
