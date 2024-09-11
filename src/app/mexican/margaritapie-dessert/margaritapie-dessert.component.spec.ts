import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargaritapieDessertComponent } from './margaritapie-dessert.component';

describe('MargaritapieDessertComponent', () => {
  let component: MargaritapieDessertComponent;
  let fixture: ComponentFixture<MargaritapieDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MargaritapieDessertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargaritapieDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
