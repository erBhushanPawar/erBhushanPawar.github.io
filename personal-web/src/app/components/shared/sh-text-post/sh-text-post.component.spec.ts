/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShTextPostComponent } from './sh-text-post.component';

describe('ShTextPostComponent', () => {
  let component: ShTextPostComponent;
  let fixture: ComponentFixture<ShTextPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShTextPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShTextPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
