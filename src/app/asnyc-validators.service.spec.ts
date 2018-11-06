import { TestBed, inject } from '@angular/core/testing';

import { AsnycValidatorsService } from './asnyc-validators.service';

describe('AsnycValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsnycValidatorsService]
    });
  });

  it('should be created', inject([AsnycValidatorsService], (service: AsnycValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
