import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

export const routes: Routes = [

    {path: 'movies', component: MoviesListComponent},
    {path: '**', component: MoviesListComponent}
];
