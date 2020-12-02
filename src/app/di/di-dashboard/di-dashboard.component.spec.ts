import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiDashboardComponent } from './di-dashboard.component';

describe('DiDashboardComponent', () => {
  let component: DiDashboardComponent;
  let fixture: ComponentFixture<DiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
