import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: './auth-signup/auth-signup.module#AuthSignupModule'
      },
      {
        path: 'signup-v2',
        loadChildren: './auth-signup-v2/auth-signup-v2.module#AuthSignupV2Module'
      },
      {
        path: 'signin',
        loadChildren: './auth-signin/auth-signin.module#AuthSigninModule'
      },
      {
        path: 'signin-v2',
        loadChildren: './auth-signin-v2/auth-signin-v2.module#AuthSigninV2Module'
      },
      {
        path: 'signin-v3',
        loadChildren: './auth-signin-v3/auth-signin-v3.module#AuthSigninV3Module'
      },
      {
        path: 'signin-v4',
        loadChildren: './auth-signin-v4/auth-signin-v4.module#AuthSigninV4Module'
      },
      {
        path: 'signin-v5',
        loadChildren: './auth-signin-v5/auth-signin-v5.module#AuthSigninV5Module'
      },
      {
        path: 'reset-password',
        loadChildren: './auth-reset-password/auth-reset-password.module#AuthResetPasswordModule'
      },
      {
        path: 'change-password',
        loadChildren: './auth-change-password/auth-change-password.module#AuthChangePasswordModule'
      },
      {
        path: 'personal-information',
        loadChildren: './auth-personal-info/auth-personal-info.module#AuthPersonalInfoModule'
      },
      {
        path: 'profile-settings',
        loadChildren: './auth-profile-settings/auth-profile-settings.module#AuthProfileSettingsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
