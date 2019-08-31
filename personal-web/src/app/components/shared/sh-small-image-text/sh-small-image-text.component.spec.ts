/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShSmallImageTextComponent } from './sh-small-image-text.component';

describe('ShSmallImageTextComponent', () => {
  let component: ShSmallImageTextComponent;
  let fixture: ComponentFixture<ShSmallImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShSmallImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShSmallImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
