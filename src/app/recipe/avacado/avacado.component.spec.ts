import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvacadoComponent } from './avacado.component';

describe('AvacadoComponent', () => {
  let component: AvacadoComponent;
  let fixture: ComponentFixture<AvacadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvacadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
