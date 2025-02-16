import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingComponent } from './farming.component';

describe('FarmingComponent', () => {
  let component: FarmingComponent;
  let fixture: ComponentFixture<FarmingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmingComponent]
    });
    fixture = TestBed.createComponent(FarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
