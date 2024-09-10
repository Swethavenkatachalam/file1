import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmritsariComponent } from './amritsari.component';

describe('AmritsariComponent', () => {
  let component: AmritsariComponent;
  let fixture: ComponentFixture<AmritsariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmritsariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmritsariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
