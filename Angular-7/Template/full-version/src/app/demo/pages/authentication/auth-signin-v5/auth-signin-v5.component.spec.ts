import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSigninV5Component } from './auth-signin-v5.component';

describe('AuthSigninV5Component', () => {
  let component: AuthSigninV5Component;
  let fixture: ComponentFixture<AuthSigninV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSigninV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSigninV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
