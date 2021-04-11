import { TestBed } from '@angular/core/testing';

import { MissionDetailsService } from './mission-details.service';

describe('MissionDetailsService', () => {
  let service: MissionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
