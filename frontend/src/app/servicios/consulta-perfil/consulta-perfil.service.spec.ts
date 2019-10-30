import { TestBed } from '@angular/core/testing';

import { ConsultaPerfilService } from './consulta-perfil.service';

describe('ConsultaPerfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaPerfilService = TestBed.get(ConsultaPerfilService);
    expect(service).toBeTruthy();
  });
});
