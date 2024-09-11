import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefstirFryComponent } from './beefstir-fry.component';

describe('BeefstirFryComponent', () => {
  let component: BeefstirFryComponent;
  let fixture: ComponentFixture<BeefstirFryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeefstirFryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeefstirFryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
