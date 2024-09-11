import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperoniPizzaComponent } from './pepperoni-pizza.component';

describe('PepperoniPizzaComponent', () => {
  let component: PepperoniPizzaComponent;
  let fixture: ComponentFixture<PepperoniPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PepperoniPizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PepperoniPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
