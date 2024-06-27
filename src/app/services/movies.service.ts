import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from '../entity/movie';
import { MovieDetail } from '../entity/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.httpClient.get<any[]>("/movies").pipe(
      map(response => response.map(movie => this.mapToMovie(movie))
      ));
  }

  getMovieDetailById(id: string): Observable<MovieDetail> {
    return this.httpClient.get<any[]>(`/movies/${id}`).pipe(
      map(movie => this.mapMovieDetails(movie))
    );
  }

 private mapToMovie(movie : any): Movie{
  return {
    id: movie.id,
    title: movie.title,
    release_date: movie.release_date,
    budget: movie.budget,
    duration: movie.duration    
  };
 }

 private mapMovieDetails(movie : any): MovieDetail{
  return {
    title: movie.title,
    release_date: movie.release_date,
    budget: movie.budget,
    duration: movie.duration,
    box_office: movie.box_office,
    cinematographers: movie.cinematographers,
    poster: movie.poster,
    producers: movie.producers,
    summary: movie.summary
  };
 }
}
