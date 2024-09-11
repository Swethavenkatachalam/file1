import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeapditanPizzaComponent } from './neapditan-pizza.component';

describe('NeapditanPizzaComponent', () => {
  let component: NeapditanPizzaComponent;
  let fixture: ComponentFixture<NeapditanPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeapditanPizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeapditanPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
