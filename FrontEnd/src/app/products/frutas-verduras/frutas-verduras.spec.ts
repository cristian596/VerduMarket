import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasVerduras } from './frutas-verduras';

describe('FrutasVerduras', () => {
  let component: FrutasVerduras;
  let fixture: ComponentFixture<FrutasVerduras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrutasVerduras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutasVerduras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
