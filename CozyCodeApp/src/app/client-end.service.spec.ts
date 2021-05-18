import { TestBed } from '@angular/core/testing';

import { ClientEndService } from './client-end.service';

describe('ClientEndService', () => {
  let service: ClientEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
