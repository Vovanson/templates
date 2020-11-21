import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplExrpOperatorComponent } from './templ-exrp-operator.component';

describe('TemplExrpOperatorComponent', () => {
  let component: TemplExrpOperatorComponent;
  let fixture: ComponentFixture<TemplExrpOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplExrpOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplExrpOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
