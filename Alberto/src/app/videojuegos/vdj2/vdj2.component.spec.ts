import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdj2Component } from './vdj2.component';

describe('Vdj2Component', () => {
  let component: Vdj2Component;
  let fixture: ComponentFixture<Vdj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vdj2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vdj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
