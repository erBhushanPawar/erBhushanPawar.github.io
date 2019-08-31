import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}








export enum CardTypes {
  FULL_IMAGE = 'FULL_IMAGE',
  SMALL_IMAGE_TEXT = 'SMALL_IMAGE_TEXT',
  IMAGE_OVERLAY = 'IMAGE_OVERLAY',
  FULL_IMAGE_OVERLAY = 'FULL_IMAGE_OVERLAY',
  TEXT_POST = 'TEXT_POST'

}