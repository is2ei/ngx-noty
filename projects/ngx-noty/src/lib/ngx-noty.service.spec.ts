import { TestBed } from '@angular/core/testing';

import { NgxNotyService } from './ngx-noty.service';

describe('NgxNotyService', () => {
  let service: NgxNotyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNotyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
