import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../components/posts/post-details/post-details.component';
import { SharedModule } from './shared.module';
import { CommentsComponent } from '../components/shared/comments/comments.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    declarations: [PostDetailsComponent, CommentsComponent]
})
export class PostsModule { }
