import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciclajePage } from './reciclaje.page';

describe('ReciclajePage', () => {
  let component: ReciclajePage;
  let fixture: ComponentFixture<ReciclajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciclajePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciclajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
