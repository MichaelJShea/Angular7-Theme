import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSigninV4Component } from './auth-signin-v4.component';

describe('AuthSigninV4Component', () => {
  let component: AuthSigninV4Component;
  let fixture: ComponentFixture<AuthSigninV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSigninV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSigninV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
