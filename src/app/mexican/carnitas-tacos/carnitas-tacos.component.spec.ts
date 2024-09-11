import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnitasTacosComponent } from './carnitas-tacos.component';

describe('CarnitasTacosComponent', () => {
  let component: CarnitasTacosComponent;
  let fixture: ComponentFixture<CarnitasTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarnitasTacosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnitasTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
