import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSmokedsalmonRisottoComponent } from './hot-smokedsalmon-risotto.component';

describe('HotSmokedsalmonRisottoComponent', () => {
  let component: HotSmokedsalmonRisottoComponent;
  let fixture: ComponentFixture<HotSmokedsalmonRisottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotSmokedsalmonRisottoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotSmokedsalmonRisottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
