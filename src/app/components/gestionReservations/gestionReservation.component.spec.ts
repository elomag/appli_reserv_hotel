import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gestionReservationComponent } from './gestionReservation.component';

describe('gestionReservationComponent', () => {
  let component: gestionReservationComponent;
  let fixture: ComponentFixture<gestionReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ gestionReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(gestionReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
