import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PozolerojoSoupComponent } from './pozolerojo-soup.component';

describe('PozolerojoSoupComponent', () => {
  let component: PozolerojoSoupComponent;
  let fixture: ComponentFixture<PozolerojoSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PozolerojoSoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PozolerojoSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
