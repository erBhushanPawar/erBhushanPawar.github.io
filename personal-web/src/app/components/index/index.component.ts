import { Component, OnInit } from '@angular/core';
import { CardTypes } from 'src/app/app.component';
import { environment } from 'src/environments/environment';
import { DalService } from 'src/app/services/dal.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  about = {}

  banner = {}
  posts: any[] = [];
  courses: any[] = [];
  constructor(private dal: DalService) {
    this.dal.getPosts().subscribe(x => {
      this.posts = x;
    });
    this.dal.getCourses().subscribe(x => {
      this.courses = x;
    });
    this.dal.getAbout().subscribe(x => {
      this.about = x;
    })
    this.dal.getBanner().subscribe(x => {
      this.banner = x;
    })
  }


}
