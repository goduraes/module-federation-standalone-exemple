import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule('mfe1', './Routes').then((m) => m.APP_ROUTES),
  },
  {
    path: 'mfe2',
    loadChildren: () => loadRemoteModule('mfe2', './Routes').then((m) => m.APP_ROUTES),
  },
];
