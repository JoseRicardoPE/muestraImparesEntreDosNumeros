import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddAmountComponent } from './odd-amount.component';

describe('OddAmountComponent', () => {
  let component: OddAmountComponent;
  let fixture: ComponentFixture<OddAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
