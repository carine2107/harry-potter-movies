import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [

    {path: '', redirectTo: '/movies', pathMatch: 'full'},   /** permet de rediriger le url vers movies */
    {path: 'movies', component: MoviesListComponent},
    {path: 'movies/:id', component: MovieDetailComponent},
    {path: '**', redirectTo: '/movies', pathMatch: 'full'} /** permet de rediriger le url vers movies */
];
