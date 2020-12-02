import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOComponent } from './i-o.component';

describe('IOComponent', () => {
  let component: IOComponent;
  let fixture: ComponentFixture<IOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
