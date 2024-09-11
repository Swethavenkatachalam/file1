import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopalesandtomatillaStewComponent } from './nopalesandtomatilla-stew.component';

describe('NopalesandtomatillaStewComponent', () => {
  let component: NopalesandtomatillaStewComponent;
  let fixture: ComponentFixture<NopalesandtomatillaStewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NopalesandtomatillaStewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NopalesandtomatillaStewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
