import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DalService } from 'src/app/services/dal.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any = {}

  constructor(private route: ActivatedRoute, private dal: DalService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.dal.getPosts(`/posts/${x.title}`).subscribe(y => {

        this.post = y.length ? y[0] : y;
        console.log(this.post)
        if (this.post.imageUrl) {
          let splitted = this.post.imageUrl.split('/');
          let ind = splitted.indexOf('max');
          if (ind !== -1) {
            splitted[ind + 1] = window.innerWidth;
            this.post.imageUrl = splitted.join('/')
          } else {
            this.post.imageUrl = this.post.imageUrl.split('&').map(x => { x = x.split('='); if (x[0] === 'w') { x[1] = window.innerWidth; } return `${x[0]}=${x[1]}`; }).join('&')
          }
        }
      })
    })
  }

}
