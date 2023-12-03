/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Juego4Component } from './juego4.component';

describe('Juego4Component', () => {
  let component: Juego4Component;
  let fixture: ComponentFixture<Juego4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Juego4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Juego4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
