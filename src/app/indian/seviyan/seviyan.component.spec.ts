import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeviyanComponent } from './seviyan.component';

describe('SeviyanComponent', () => {
  let component: SeviyanComponent;
  let fixture: ComponentFixture<SeviyanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeviyanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeviyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
