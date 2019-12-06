import { TestBed } from '@angular/core/testing';

import { Test100Service } from './test100.service';

describe('Test100Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test100Service = TestBed.get(Test100Service);
    expect(service).toBeTruthy();
  });
});
