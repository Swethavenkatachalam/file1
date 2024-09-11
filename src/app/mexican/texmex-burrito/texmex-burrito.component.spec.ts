import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexmexBurritoComponent } from './texmex-burrito.component';

describe('TexmexBurritoComponent', () => {
  let component: TexmexBurritoComponent;
  let fixture: ComponentFixture<TexmexBurritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TexmexBurritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexmexBurritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
