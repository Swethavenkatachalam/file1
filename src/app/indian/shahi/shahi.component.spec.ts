import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahiComponent } from './shahi.component';

describe('ShahiComponent', () => {
  let component: ShahiComponent;
  let fixture: ComponentFixture<ShahiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShahiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShahiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
