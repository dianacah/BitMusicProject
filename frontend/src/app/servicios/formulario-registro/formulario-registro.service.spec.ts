import { TestBed } from '@angular/core/testing';

import { FormularioRegistroService } from './formulario-registro.service';

describe('FormularioRegistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioRegistroService = TestBed.get(FormularioRegistroService);
    expect(service).toBeTruthy();
  });
});
