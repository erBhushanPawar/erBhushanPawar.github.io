import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DalService } from './dal.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {
  createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {

    let db: any = localStorage.getItem('db');
    if (db) {
      try {
        db = JSON.parse(db);
      } catch (error) {

      }

    }
    if (!db || !db.version) {
      if (!localStorage.getItem('fetchDb')) {

        localStorage.setItem('fetchDb', 'true');
        window.location.reload()
      }
    }
    console.log('>>>', reqInfo);
    return db || { hello: 'i am up' };

  }


}
