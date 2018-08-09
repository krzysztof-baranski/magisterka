import { TestBed, inject } from '@angular/core/testing';

import { TunerService } from './tuner.service';

describe('TunerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TunerService]
    });
  });

  it('should be created', inject([TunerService], (service: TunerService) => {
    expect(service).toBeTruthy();
  }));
});
