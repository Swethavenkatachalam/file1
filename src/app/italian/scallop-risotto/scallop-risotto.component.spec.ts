import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScallopRisottoComponent } from './scallop-risotto.component';

describe('ScallopRisottoComponent', () => {
  let component: ScallopRisottoComponent;
  let fixture: ComponentFixture<ScallopRisottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScallopRisottoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScallopRisottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
