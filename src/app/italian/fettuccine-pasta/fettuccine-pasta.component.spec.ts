import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FettuccinePastaComponent } from './fettuccine-pasta.component';

describe('FettuccinePastaComponent', () => {
  let component: FettuccinePastaComponent;
  let fixture: ComponentFixture<FettuccinePastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FettuccinePastaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FettuccinePastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
