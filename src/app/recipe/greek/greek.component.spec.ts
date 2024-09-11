import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreekComponent } from './greek.component';

describe('GreekComponent', () => {
  let component: GreekComponent;
  let fixture: ComponentFixture<GreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
