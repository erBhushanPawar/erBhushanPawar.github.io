/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DalService } from './dal.service';

describe('Service: Dal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DalService]
    });
  });

  it('should ...', inject([DalService], (service: DalService) => {
    expect(service).toBeTruthy();
  }));
});
