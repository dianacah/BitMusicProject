import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCancionesComponent } from './modificar-canciones.component';

describe('ModificarCancionesComponent', () => {
  let component: ModificarCancionesComponent;
  let fixture: ComponentFixture<ModificarCancionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarCancionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
