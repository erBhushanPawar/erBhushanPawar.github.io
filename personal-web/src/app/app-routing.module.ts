import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'posts/:title', component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
