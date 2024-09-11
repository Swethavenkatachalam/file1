import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitybiscottiDessertComponent } from './fruitybiscotti-dessert.component';

describe('FruitybiscottiDessertComponent', () => {
  let component: FruitybiscottiDessertComponent;
  let fixture: ComponentFixture<FruitybiscottiDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitybiscottiDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitybiscottiDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
