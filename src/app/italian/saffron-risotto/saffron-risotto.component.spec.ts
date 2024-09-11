import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronRisottoComponent } from './saffron-risotto.component';

describe('SaffronRisottoComponent', () => {
  let component: SaffronRisottoComponent;
  let fixture: ComponentFixture<SaffronRisottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaffronRisottoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaffronRisottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
