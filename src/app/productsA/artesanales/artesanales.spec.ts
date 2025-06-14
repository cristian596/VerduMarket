import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artesanales } from './artesanales';

describe('Artesanales', () => {
  let component: Artesanales;
  let fixture: ComponentFixture<Artesanales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artesanales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artesanales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
