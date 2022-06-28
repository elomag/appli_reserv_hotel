import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionchambresComponent } from './gestionchambres.component';

describe('GestionchambresComponent', () => {
  let component: GestionchambresComponent;
  let fixture: ComponentFixture<GestionchambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionchambresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionchambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
