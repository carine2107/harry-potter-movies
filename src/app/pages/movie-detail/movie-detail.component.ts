import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieItemComponent } from '../movies-list/movie-item/movie-item.component';
import { BudgetPipe } from '../../pipes/budget.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { ArrayFormatterPipe } from '../../pipes/array-formatter.pipe';
import { Observable } from 'rxjs';
import { MovieDetail } from '../../entity/movie-details';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [MovieItemComponent,
    NgForOf,
    RouterLink,
    AsyncPipe,
    JsonPipe,
    NgIf,
    BudgetPipe,
    DurationPipe,
    ArrayFormatterPipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private movieService: MoviesService = inject(MoviesService);
  public movieDetail$!: Observable<MovieDetail>;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const movieId: string = params.get('id') as string;
      this.movieDetail$ = this.movieService.getMovieDetailById(movieId);
    });
  }

}
