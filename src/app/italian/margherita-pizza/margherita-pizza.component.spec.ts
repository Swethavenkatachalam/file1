import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargheritaPizzaComponent } from './margherita-pizza.component';

describe('MargheritaPizzaComponent', () => {
  let component: MargheritaPizzaComponent;
  let fixture: ComponentFixture<MargheritaPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MargheritaPizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargheritaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
