import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoegamePage } from './tictactoegame.page';

describe('TictactoegamePage', () => {
  let component: TictactoegamePage;
  let fixture: ComponentFixture<TictactoegamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoegamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoegamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
