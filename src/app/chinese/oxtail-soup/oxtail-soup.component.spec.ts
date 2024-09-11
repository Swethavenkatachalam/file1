import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxtailSoupComponent } from './oxtail-soup.component';

describe('OxtailSoupComponent', () => {
  let component: OxtailSoupComponent;
  let fixture: ComponentFixture<OxtailSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OxtailSoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OxtailSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
