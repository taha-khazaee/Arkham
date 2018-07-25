import { TestBed, inject } from '@angular/core/testing';

import { JokerService } from './joker.service';

describe('JokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokerService]
    });
  });

  it('should be created', inject([JokerService], (service: JokerService) => {
    expect(service).toBeTruthy();
  }));
});
