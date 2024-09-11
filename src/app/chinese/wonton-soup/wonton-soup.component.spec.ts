import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WontonSoupComponent } from './wonton-soup.component';

describe('WontonSoupComponent', () => {
  let component: WontonSoupComponent;
  let fixture: ComponentFixture<WontonSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WontonSoupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WontonSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
