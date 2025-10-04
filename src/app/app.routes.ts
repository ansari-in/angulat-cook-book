import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RecipeDetail } from './pages/recipe-detail/recipe-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'recipe/:id', component: RecipeDetail },
  { path: '**', redirectTo: '' }
];
