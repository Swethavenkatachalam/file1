import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolhapuriComponent } from './kolhapuri.component';

describe('KolhapuriComponent', () => {
  let component: KolhapuriComponent;
  let fixture: ComponentFixture<KolhapuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KolhapuriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KolhapuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
