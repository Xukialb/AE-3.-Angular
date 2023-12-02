import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdj1Component } from './vdj1.component';

describe('Vdj1Component', () => {
  let component: Vdj1Component;
  let fixture: ComponentFixture<Vdj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vdj1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vdj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
