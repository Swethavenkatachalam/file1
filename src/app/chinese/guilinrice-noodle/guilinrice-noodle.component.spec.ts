import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuilinriceNoodleComponent } from './guilinrice-noodle.component';

describe('GuilinriceNoodleComponent', () => {
  let component: GuilinriceNoodleComponent;
  let fixture: ComponentFixture<GuilinriceNoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuilinriceNoodleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuilinriceNoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
