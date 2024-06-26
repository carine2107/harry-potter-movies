import { Component, Input, inject } from '@angular/core';
import { BudgetPipe } from '../../../pipes/budget.pipe';
import { DurationPipe } from '../../../pipes/duration.pipe';
import { Movie } from '../../../entity/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [
    BudgetPipe,
    DurationPipe
  ],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  router: Router = inject(Router);
  @Input() movie!: Movie;

  redirectToMovieDetailsById(id: string) {
    this.router.navigate(['/movies/' + id]).then();
  }
}
