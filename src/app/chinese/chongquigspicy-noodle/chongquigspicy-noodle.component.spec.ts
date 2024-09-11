import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChongquigspicyNoodleComponent } from './chongquigspicy-noodle.component';

describe('ChongquigspicyNoodleComponent', () => {
  let component: ChongquigspicyNoodleComponent;
  let fixture: ComponentFixture<ChongquigspicyNoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChongquigspicyNoodleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChongquigspicyNoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
