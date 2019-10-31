import { TestBed } from '@angular/core/testing';

import { TraerCancionesService } from './traer-canciones.service';

describe('TraerCancionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraerCancionesService = TestBed.get(TraerCancionesService);
    expect(service).toBeTruthy();
  });
});
