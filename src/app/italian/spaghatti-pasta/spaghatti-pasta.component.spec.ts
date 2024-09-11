import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaghattiPastaComponent } from './spaghatti-pasta.component';

describe('SpaghattiPastaComponent', () => {
  let component: SpaghattiPastaComponent;
  let fixture: ComponentFixture<SpaghattiPastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaghattiPastaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaghattiPastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
