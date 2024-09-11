import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinipanettoneDessertComponent } from './minipanettone-dessert.component';

describe('MinipanettoneDessertComponent', () => {
  let component: MinipanettoneDessertComponent;
  let fixture: ComponentFixture<MinipanettoneDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinipanettoneDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinipanettoneDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
