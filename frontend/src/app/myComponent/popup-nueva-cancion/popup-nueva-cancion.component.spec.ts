import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNuevaCancionComponent } from './popup-nueva-cancion.component';

describe('PopupNuevaCancionComponent', () => {
  let component: PopupNuevaCancionComponent;
  let fixture: ComponentFixture<PopupNuevaCancionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNuevaCancionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNuevaCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
