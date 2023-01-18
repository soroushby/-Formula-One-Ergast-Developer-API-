import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaOneComponent } from './formula-one.component';

describe('FormulaOneComponent', () => {
  let component: FormulaOneComponent;
  let fixture: ComponentFixture<FormulaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
