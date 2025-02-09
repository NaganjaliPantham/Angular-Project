import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidder1Component } from './slidder1.component';

describe('Slidder1Component', () => {
  let component: Slidder1Component;
  let fixture: ComponentFixture<Slidder1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slidder1Component]
    });
    fixture = TestBed.createComponent(Slidder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
