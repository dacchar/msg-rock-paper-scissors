import { TestBed } from '@angular/core/testing';

import { ResultCalcService } from './result-calc.service';

describe('ResultCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultCalcService = TestBed.get(ResultCalcService);
    expect(service).toBeTruthy();
  });
});
