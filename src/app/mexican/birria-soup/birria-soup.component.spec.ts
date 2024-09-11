import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirriaSoupComponent } from './birria-soup.component';

describe('BirriaSoupComponent', () => {
  let component: BirriaSoupComponent;
  let fixture: ComponentFixture<BirriaSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirriaSoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirriaSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
