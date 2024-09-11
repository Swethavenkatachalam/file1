import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuattroFormaggiPizzaComponent } from './quattro-formaggi-pizza.component';

describe('QuattroFormaggiPizzaComponent', () => {
  let component: QuattroFormaggiPizzaComponent;
  let fixture: ComponentFixture<QuattroFormaggiPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuattroFormaggiPizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuattroFormaggiPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
