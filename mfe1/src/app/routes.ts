import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];
