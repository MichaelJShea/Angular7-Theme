import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHelpDeskComponent } from './dash-help-desk.component';

describe('DashHelpDeskComponent', () => {
  let component: DashHelpDeskComponent;
  let fixture: ComponentFixture<DashHelpDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashHelpDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
