import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InMemoryService } from './services/in-memory.service';
import { DalService } from './services/dal.service';
import { Router, NavigationEnd } from '@angular/router';
import { Utility } from './utility';

declare var ga: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dal: DalService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        Utility.reportToGA(event.urlAfterRedirects, 'pageview');
        console.log('reported', event.urlAfterRedirects)
      }
    });
  }
  ngOnInit() {
    // if (localStorage.getItem('fetchDb')) {
    const localDB = JSON.parse(localStorage.getItem('db'));
    this.dal.getFromJSON().subscribe(x => {
      if (localDB.version !== x.version) {
        localStorage.setItem('db', JSON.stringify(x));
        localStorage.removeItem('fetchDb')
        console.warn('version mismatched, DB updated at local')
        window.location.reload();
      }

    })
    // }
  }
}








export enum CardTypes {
  FULL_IMAGE = 'FULL_IMAGE',
  SMALL_IMAGE_TEXT = 'SMALL_IMAGE_TEXT',
  IMAGE_OVERLAY = 'IMAGE_OVERLAY',
  FULL_IMAGE_OVERLAY = 'FULL_IMAGE_OVERLAY',
  TEXT_POST = 'TEXT_POST'

}