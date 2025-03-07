import { TestBed } from '@angular/core/testing';

import { CardModeService } from './card-mode.service';

describe('CardModeService', () => {
  let service: CardModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
