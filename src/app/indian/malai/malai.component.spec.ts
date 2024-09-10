import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalaiComponent } from './malai.component';

describe('MalaiComponent', () => {
  let component: MalaiComponent;
  let fixture: ComponentFixture<MalaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MalaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
