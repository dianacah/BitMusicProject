import { TestBed } from '@angular/core/testing';

import { StoreSongsService } from './store-songs.service';

describe('StoreSongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreSongsService = TestBed.get(StoreSongsService);
    expect(service).toBeTruthy();
  });
});
