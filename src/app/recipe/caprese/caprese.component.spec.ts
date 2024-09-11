import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapreseComponent } from './caprese.component';

describe('CapreseComponent', () => {
  let component: CapreseComponent;
  let fixture: ComponentFixture<CapreseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapreseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapreseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
