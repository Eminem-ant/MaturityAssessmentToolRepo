import { TestBed } from '@angular/core/testing';

import { MATService } from './mat.service';

describe('MATService', () => {
  let service: MATService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MATService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
