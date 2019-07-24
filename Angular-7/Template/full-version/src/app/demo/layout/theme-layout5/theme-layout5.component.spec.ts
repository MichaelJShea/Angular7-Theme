import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLayout5Component } from './theme-layout5.component';

describe('ThemeLayout5Component', () => {
  let component: ThemeLayout5Component;
  let fixture: ComponentFixture<ThemeLayout5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLayout5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
