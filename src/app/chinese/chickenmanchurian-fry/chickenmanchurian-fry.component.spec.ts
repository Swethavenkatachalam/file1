import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenmanchurianFryComponent } from './chickenmanchurian-fry.component';

describe('ChickenmanchurianFryComponent', () => {
  let component: ChickenmanchurianFryComponent;
  let fixture: ComponentFixture<ChickenmanchurianFryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChickenmanchurianFryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenmanchurianFryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
