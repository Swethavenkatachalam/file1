import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoliwadaComponent } from './koliwada.component';

describe('KoliwadaComponent', () => {
  let component: KoliwadaComponent;
  let fixture: ComponentFixture<KoliwadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KoliwadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoliwadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
