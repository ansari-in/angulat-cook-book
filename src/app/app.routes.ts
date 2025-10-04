import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RecipeDetail } from './pages/recipe-detail/recipe-detail';
import { LoginComponent } from './app/auth/login/login';
import { SignupComponent } from './app/auth/signup/signup';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recipe/:id', component: RecipeDetail },
  { path: '**', redirectTo: '' },
];
