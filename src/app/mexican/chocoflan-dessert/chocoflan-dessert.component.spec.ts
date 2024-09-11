import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocoflanDessertComponent } from './chocoflan-dessert.component';

describe('ChocoflanDessertComponent', () => {
  let component: ChocoflanDessertComponent;
  let fixture: ComponentFixture<ChocoflanDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChocoflanDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocoflanDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
