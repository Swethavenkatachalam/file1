import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalautiComponent } from './galauti.component';

describe('GalautiComponent', () => {
  let component: GalautiComponent;
  let fixture: ComponentFixture<GalautiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalautiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalautiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
