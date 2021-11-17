import { TestBed } from '@angular/core/testing';

import { BookaccessService } from './bookaccess.service';

describe('BookaccessService', () => {
  let service: BookaccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookaccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
