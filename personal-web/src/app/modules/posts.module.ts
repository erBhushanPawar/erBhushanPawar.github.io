import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../components/posts/post-details/post-details.component';
import { SharedModule } from './shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [PostDetailsComponent]
})
export class PostsModule { }
