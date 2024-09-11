import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlutinousballsRiceComponent } from './glutinousballs-rice.component';

describe('GlutinousballsRiceComponent', () => {
  let component: GlutinousballsRiceComponent;
  let fixture: ComponentFixture<GlutinousballsRiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlutinousballsRiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlutinousballsRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
