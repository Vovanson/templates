import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurDirComponent } from './structur-dir.component';

describe('StructurDirComponent', () => {
  let component: StructurDirComponent;
  let fixture: ComponentFixture<StructurDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructurDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructurDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
