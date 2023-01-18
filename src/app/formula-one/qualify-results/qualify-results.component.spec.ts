import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyResultsComponent } from './qualify-results.component';

describe('QualifyResultsComponent', () => {
  let component: QualifyResultsComponent;
  let fixture: ComponentFixture<QualifyResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifyResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
