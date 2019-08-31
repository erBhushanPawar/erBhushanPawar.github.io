import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DalService } from 'src/app/services/dal.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() postDetails: any = {}
  comment: any = {};
  oldComments: any[] = [];
  constructor(private dal: DalService) { }

  ngOnInit() {

  }
  postComment() {
    this.dal.postComment(this.comment).subscribe(x => {
      console.log(x)
    })



  }
  ngOnChanges() {
    this.dal.getComments(this.postDetails.id).subscribe(x => {
      this.oldComments = x;
    })
    this.comment.postId = this.postDetails.id;
    this.comment.postedOn = new Date().getTime();
  }
}
