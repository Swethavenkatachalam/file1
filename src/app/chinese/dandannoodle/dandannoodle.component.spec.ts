import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DandannoodleComponent } from './dandannoodle.component';

describe('DandannoodleComponent', () => {
  let component: DandannoodleComponent;
  let fixture: ComponentFixture<DandannoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DandannoodleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DandannoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
