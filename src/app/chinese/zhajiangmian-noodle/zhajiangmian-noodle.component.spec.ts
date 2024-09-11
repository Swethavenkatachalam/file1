import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhajiangmianNoodleComponent } from './zhajiangmian-noodle.component';

describe('ZhajiangmianNoodleComponent', () => {
  let component: ZhajiangmianNoodleComponent;
  let fixture: ComponentFixture<ZhajiangmianNoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZhajiangmianNoodleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZhajiangmianNoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
