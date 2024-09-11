import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiramisuDessertComponent } from './tiramisu-dessert.component';

describe('TiramisuDessertComponent', () => {
  let component: TiramisuDessertComponent;
  let fixture: ComponentFixture<TiramisuDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiramisuDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiramisuDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
