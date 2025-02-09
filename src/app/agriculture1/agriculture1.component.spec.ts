import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agriculture1Component } from './agriculture1.component';

describe('Agriculture1Component', () => {
  let component: Agriculture1Component;
  let fixture: ComponentFixture<Agriculture1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Agriculture1Component]
    });
    fixture = TestBed.createComponent(Agriculture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
