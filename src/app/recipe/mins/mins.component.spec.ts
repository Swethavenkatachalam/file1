import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinsComponent } from './mins.component';

describe('MinsComponent', () => {
  let component: MinsComponent;
  let fixture: ComponentFixture<MinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
