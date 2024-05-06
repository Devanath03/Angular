import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpyComponent } from './dumpy.component';

describe('DumpyComponent', () => {
  let component: DumpyComponent;
  let fixture: ComponentFixture<DumpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
