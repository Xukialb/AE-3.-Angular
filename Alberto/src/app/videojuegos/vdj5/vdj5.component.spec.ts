import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdj5Component } from './vdj5.component';

describe('Vdj5Component', () => {
  let component: Vdj5Component;
  let fixture: ComponentFixture<Vdj5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vdj5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vdj5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
