import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeComponent } from './chee.component';

describe('CheeComponent', () => {
  let component: CheeComponent;
  let fixture: ComponentFixture<CheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
