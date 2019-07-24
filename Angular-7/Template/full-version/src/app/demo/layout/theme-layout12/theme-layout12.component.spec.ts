import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout12Component } from './theme-layout12.component';

describe('ThemeLayout12Component', () => {
  let component: ThemeLayout12Component;
  let fixture: ComponentFixture<ThemeLayout12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
