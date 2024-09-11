import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NappacabbageSoupComponent } from './nappacabbage-soup.component';

describe('NappacabbageSoupComponent', () => {
  let component: NappacabbageSoupComponent;
  let fixture: ComponentFixture<NappacabbageSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NappacabbageSoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NappacabbageSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
