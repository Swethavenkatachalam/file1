import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpastorTacosComponent } from './alpastor-tacos.component';

describe('AlpastorTacosComponent', () => {
  let component: AlpastorTacosComponent;
  let fixture: ComponentFixture<AlpastorTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlpastorTacosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlpastorTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
