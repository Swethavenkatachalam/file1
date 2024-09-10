import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurmaiComponent } from './surmai.component';

describe('SurmaiComponent', () => {
  let component: SurmaiComponent;
  let fixture: ComponentFixture<SurmaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurmaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
