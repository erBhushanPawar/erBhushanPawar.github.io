import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { CourseComponent } from './components/course/course.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'posts/:title', component: PostDetailsComponent
  }
  ,
  {
    path: 'courses/:title', component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
