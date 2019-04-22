import { TestBed } from '@angular/core/testing';

import { UsernameDataService } from './username-data.service';

describe('UsernameDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsernameDataService = TestBed.get(UsernameDataService);
    expect(service).toBeTruthy();
  });
});
