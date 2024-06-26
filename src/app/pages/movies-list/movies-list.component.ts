import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, map, of, startWith, take } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../entity/movie';
import { MovieSearch } from '../../types/movie-search';
import { OrderListModule } from 'primeng/orderlist';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { BudgetPipe } from '../../pipes/budget.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MovieItemComponent,
            NgForOf,
            AsyncPipe,
            ReactiveFormsModule,
            BudgetPipe,
            DurationPipe
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  providers: [MoviesService]
})
export class MoviesListComponent implements OnInit{

  public filteredMovies$!: Observable<Movie[]>;
  public filterForm: FormGroup = new FormGroup({
    title: new FormControl<string>(''),
    year: new FormControl<string>('')
  });

  movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(movies => {
      this.movies = movies;
      this.setupFilter();
    });
  }

  private setupFilter(): void {
    const title$ = this.filterForm.get('title')!.valueChanges.pipe(startWith(''));
    const year$ = this.filterForm.get('year')!.valueChanges.pipe(startWith(''));

    this.filteredMovies$ = combineLatest([title$, year$]).pipe(
      map(([title, year]) => this.filterMovies(title, year))
    );
  }

  private filterMovies(title: string, year: string): Movie[] {
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      (year ? this.getYearFromDateString(movie.release_date).includes(year) : true)
    );
  }

  private getYearFromDateString(dateString: string): string {
    return dateString.split('-')[0];
  }

}
