import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdj4Component } from './vdj4.component';

describe('Vdj4Component', () => {
  let component: Vdj4Component;
  let fixture: ComponentFixture<Vdj4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vdj4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vdj4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
