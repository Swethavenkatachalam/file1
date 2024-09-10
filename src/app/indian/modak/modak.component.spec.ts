import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModakComponent } from './modak.component';

describe('ModakComponent', () => {
  let component: ModakComponent;
  let fixture: ComponentFixture<ModakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
