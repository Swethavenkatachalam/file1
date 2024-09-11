import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PineapplefriedRiceComponent } from './pineapplefried-rice.component';

describe('PineapplefriedRiceComponent', () => {
  let component: PineapplefriedRiceComponent;
  let fixture: ComponentFixture<PineapplefriedRiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PineapplefriedRiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PineapplefriedRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
