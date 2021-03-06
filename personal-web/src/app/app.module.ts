import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared.module';
import { CardComponent } from './components/card/card.component';
import { IndexComponent } from './components/index/index.component';
import { PostsModule } from './modules/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from './components/shared/main-header/main-header.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './services/in-memory.service';
import { DalService } from './services/dal.service';
import { CustomHttpService } from './services/custom-http.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    IndexComponent,
    MainHeaderComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PostsModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService, { passThruUnknownUrl: true, rootPath: '/app', apiBase: 'app/' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
