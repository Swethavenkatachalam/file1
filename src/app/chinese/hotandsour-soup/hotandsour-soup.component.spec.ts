import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotandsourSoupComponent } from './hotandsour-soup.component';

describe('HotandsourSoupComponent', () => {
  let component: HotandsourSoupComponent;
  let fixture: ComponentFixture<HotandsourSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotandsourSoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotandsourSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
