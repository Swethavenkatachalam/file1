import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanaComponent } from './chana.component';

describe('ChanaComponent', () => {
  let component: ChanaComponent;
  let fixture: ComponentFixture<ChanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
