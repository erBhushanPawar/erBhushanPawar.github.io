import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(private cHTTP: CustomHttpService) { }

  getFromJSON() {
    return this.cHTTP.getReq(environment.jsonBlobPath);
  }

  saveJSONBlob(completeJSON: any) {
    return this.cHTTP.postReq(environment.jsonBlobPath, completeJSON);
  }

  getBanner() {
    return this.cHTTP.getReq(environment.bannerURL)
  }

  getAbout() {
    return this.cHTTP.getReq(environment.aboutURL)
  }

  getPosts(routerLink?: string) {
    let q = null;
    if (routerLink) {
      q = { routerLink }
    }
    return this.cHTTP.getReq(environment.postsURL, q)
  }

  getCourses(routerLink?: string) {
    let q = null;
    if (routerLink) {
      q = { routerLink }
    }
    return this.cHTTP.getReq(environment.coursesURL, q)
  }
  postComment(comment) {
    return this.cHTTP.postReq(environment.commentsURL, comment)
  }

  getComments(postId) {
    return this.cHTTP.getReq(environment.commentsURL, { postId });
  }

}
