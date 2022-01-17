import { TestBed } from '@angular/core/testing';

import { TrendingGiphyService } from './trending-giphy.service';

describe('TrendingGiphyService', () => {
  let service: TrendingGiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingGiphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
