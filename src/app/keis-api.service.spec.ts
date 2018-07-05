import { TestBed, inject } from '@angular/core/testing';

import { KeisAPIService } from './keis-api.service';

describe('KeisAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeisAPIService]
    });
  });

  it('should be created', inject([KeisAPIService], (service: KeisAPIService) => {
    expect(service).toBeTruthy();
  }));
});
