import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantoneseclaypotRiceComponent } from './cantoneseclaypot-rice.component';

describe('CantoneseclaypotRiceComponent', () => {
  let component: CantoneseclaypotRiceComponent;
  let fixture: ComponentFixture<CantoneseclaypotRiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CantoneseclaypotRiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantoneseclaypotRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
