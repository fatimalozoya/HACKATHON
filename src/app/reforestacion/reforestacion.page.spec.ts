import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReforestacionPage } from './reforestacion.page';

describe('ReforestacionPage', () => {
  let component: ReforestacionPage;
  let fixture: ComponentFixture<ReforestacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReforestacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReforestacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
