import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetyBindingComponent } from './propety-binding.component';

describe('PropetyBindingComponent', () => {
  let component: PropetyBindingComponent;
  let fixture: ComponentFixture<PropetyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropetyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
