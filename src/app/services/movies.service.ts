import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Movie } from '../entity/movie';
import { MovieDetail } from '../entity/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("/movies");
  }

  getMovieDetailById(id: string): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(`/movies/${id}`);
  }

}
