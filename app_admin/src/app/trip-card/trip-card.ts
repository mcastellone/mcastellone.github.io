import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip: any;
}