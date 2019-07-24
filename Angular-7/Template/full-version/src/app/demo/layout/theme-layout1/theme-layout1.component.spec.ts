import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout1Component } from './theme-layout1.component';

describe('ThemeLayout1Component', () => {
  let component: ThemeLayout1Component;
  let fixture: ComponentFixture<ThemeLayout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
