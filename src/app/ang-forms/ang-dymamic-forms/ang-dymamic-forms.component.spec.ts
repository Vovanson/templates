import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDymamicFormsComponent } from './ang-dymamic-forms.component';

describe('AngDymamicFormsComponent', () => {
  let component: AngDymamicFormsComponent;
  let fixture: ComponentFixture<AngDymamicFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngDymamicFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngDymamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
