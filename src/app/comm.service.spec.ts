import { TestBed } from '@angular/core/testing';

import { CommService } from './comm.service';

describe('CommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommService = TestBed.get(CommService);
    expect(service).toBeTruthy();
  });
});
