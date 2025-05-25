import { TestBed } from '@angular/core/testing';

import { FacebookPixelServiceService } from './facebook-pixel-service.service';

describe('FacebookPixelServiceService', () => {
  let service: FacebookPixelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookPixelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
