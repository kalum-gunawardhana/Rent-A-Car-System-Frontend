import { Routes } from '@angular/router';
import { SignupComponent } from './auth/component/signup/signup.component';
import { LoginComponent } from './auth/component/login/login.component';
import { LandingPageComponent } from './auth/component/landing-page/landing-page.component';

export const routes: Routes = [
    {path:"", component: LandingPageComponent},
    {path:"register", component: SignupComponent},
    {path:"login", component: LoginComponent}
];