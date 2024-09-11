import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanchickentorillaSoupComponent } from './mexicanchickentorilla-soup.component';

describe('MexicanchickentorillaSoupComponent', () => {
  let component: MexicanchickentorillaSoupComponent;
  let fixture: ComponentFixture<MexicanchickentorillaSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MexicanchickentorillaSoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MexicanchickentorillaSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
