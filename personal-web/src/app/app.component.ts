import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InMemoryService } from './services/in-memory.service';
import { DalService } from './services/dal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dal: DalService) {

  }
  ngOnInit() {
    if (localStorage.getItem('fetchDb')) {
      this.dal.getFromJSON().subscribe(x => {
        localStorage.setItem('db', JSON.stringify(x));
        localStorage.removeItem('fetchDb')
        window.location.reload();
      })
    }
  }
}








export enum CardTypes {
  FULL_IMAGE = 'FULL_IMAGE',
  SMALL_IMAGE_TEXT = 'SMALL_IMAGE_TEXT',
  IMAGE_OVERLAY = 'IMAGE_OVERLAY',
  FULL_IMAGE_OVERLAY = 'FULL_IMAGE_OVERLAY',
  TEXT_POST = 'TEXT_POST'

}