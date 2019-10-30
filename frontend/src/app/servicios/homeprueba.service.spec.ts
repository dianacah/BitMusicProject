import { TestBed } from '@angular/core/testing';

import { HomepruebaService } from './homeprueba.service';

describe('HomepruebaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepruebaService = TestBed.get(HomepruebaService);
    expect(service).toBeTruthy();
  });
});
