import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguinePastaComponent } from './linguine-pasta.component';

describe('LinguinePastaComponent', () => {
  let component: LinguinePastaComponent;
  let fixture: ComponentFixture<LinguinePastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinguinePastaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguinePastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
