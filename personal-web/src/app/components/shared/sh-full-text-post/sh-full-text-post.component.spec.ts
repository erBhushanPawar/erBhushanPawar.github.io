/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShFullTextPostComponent } from './sh-full-text-post.component';

describe('ShFullTextPostComponent', () => {
  let component: ShFullTextPostComponent;
  let fixture: ComponentFixture<ShFullTextPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShFullTextPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShFullTextPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
