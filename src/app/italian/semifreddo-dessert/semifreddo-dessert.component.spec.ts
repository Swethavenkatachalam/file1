import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemifreddoDessertComponent } from './semifreddo-dessert.component';

describe('SemifreddoDessertComponent', () => {
  let component: SemifreddoDessertComponent;
  let fixture: ComponentFixture<SemifreddoDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemifreddoDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemifreddoDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
