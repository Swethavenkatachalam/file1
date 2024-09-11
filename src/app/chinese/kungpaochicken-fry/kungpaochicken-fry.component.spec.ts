import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KungpaochickenFryComponent } from './kungpaochicken-fry.component';

describe('KungpaochickenFryComponent', () => {
  let component: KungpaochickenFryComponent;
  let fixture: ComponentFixture<KungpaochickenFryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KungpaochickenFryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KungpaochickenFryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
