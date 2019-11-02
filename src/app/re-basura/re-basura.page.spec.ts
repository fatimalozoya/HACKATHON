import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReBasuraPage } from './re-basura.page';

describe('ReBasuraPage', () => {
  let component: ReBasuraPage;
  let fixture: ComponentFixture<ReBasuraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReBasuraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReBasuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
