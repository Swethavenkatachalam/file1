import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanandcheeseBurritoComponent } from './beanandcheese-burrito.component';

describe('BeanandcheeseBurritoComponent', () => {
  let component: BeanandcheeseBurritoComponent;
  let fixture: ComponentFixture<BeanandcheeseBurritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeanandcheeseBurritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeanandcheeseBurritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
