import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesameshrimpFryComponent } from './sesameshrimp-fry.component';

describe('SesameshrimpFryComponent', () => {
  let component: SesameshrimpFryComponent;
  let fixture: ComponentFixture<SesameshrimpFryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SesameshrimpFryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesameshrimpFryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
