import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpTacosComponent } from './shrimp-tacos.component';

describe('ShrimpTacosComponent', () => {
  let component: ShrimpTacosComponent;
  let fixture: ComponentFixture<ShrimpTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShrimpTacosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShrimpTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
