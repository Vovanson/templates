import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngReactiveFormsComponent } from './ang-reactive-forms.component';

describe('AngReactiveFormsComponent', () => {
  let component: AngReactiveFormsComponent;
  let fixture: ComponentFixture<AngReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
