import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDashComponent } from './dir-dash.component';

describe('DirDashComponent', () => {
  let component: DirDashComponent;
  let fixture: ComponentFixture<DirDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
