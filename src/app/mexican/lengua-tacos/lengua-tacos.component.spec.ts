import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguaTacosComponent } from './lengua-tacos.component';

describe('LenguaTacosComponent', () => {
  let component: LenguaTacosComponent;
  let fixture: ComponentFixture<LenguaTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LenguaTacosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguaTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
