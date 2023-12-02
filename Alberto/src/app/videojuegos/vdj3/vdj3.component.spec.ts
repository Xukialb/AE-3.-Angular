import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdj3Component } from './vdj3.component';

describe('Vdj3Component', () => {
  let component: Vdj3Component;
  let fixture: ComponentFixture<Vdj3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vdj3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vdj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
