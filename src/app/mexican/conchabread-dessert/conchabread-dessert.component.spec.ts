import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConchabreadDessertComponent } from './conchabread-dessert.component';

describe('ConchabreadDessertComponent', () => {
  let component: ConchabreadDessertComponent;
  let fixture: ComponentFixture<ConchabreadDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConchabreadDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConchabreadDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
