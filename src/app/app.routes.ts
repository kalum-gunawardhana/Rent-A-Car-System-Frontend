import { Routes } from '@angular/router';
import { SignupComponent } from './auth/component/signup/signup.component';
import { LoginComponent } from './auth/component/login/login.component';

export const routes: Routes = [
    {path:"", component: SignupComponent},
    {path:"register", component: SignupComponent},
    {path:"login", component: LoginComponent}
];