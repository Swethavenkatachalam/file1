import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreslechescakeDessertComponent } from './treslechescake-dessert.component';

describe('TreslechescakeDessertComponent', () => {
  let component: TreslechescakeDessertComponent;
  let fixture: ComponentFixture<TreslechescakeDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreslechescakeDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreslechescakeDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
