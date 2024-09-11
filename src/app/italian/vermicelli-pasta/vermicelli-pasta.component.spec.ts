import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermicelliPastaComponent } from './vermicelli-pasta.component';

describe('VermicelliPastaComponent', () => {
  let component: VermicelliPastaComponent;
  let fixture: ComponentFixture<VermicelliPastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VermicelliPastaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VermicelliPastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
