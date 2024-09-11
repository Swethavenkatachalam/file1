import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBurritoComponent } from './mission-burrito.component';

describe('MissionBurritoComponent', () => {
  let component: MissionBurritoComponent;
  let fixture: ComponentFixture<MissionBurritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionBurritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionBurritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
