import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-list.html',
  styleUrls: ['./trip-list.css']
})
export class TripListComponent implements OnInit {

  trips: any[] = [
  {
    code: 'GALE',
    name: 'Gale Reef',
    length: '4 nights',
    start: '2026-06-15',
    resort: 'Emerald Bay',
    perPerson: '799',
    image: 'reef1.jpg',
    description: 'Sed et augue lorem.'
  },
  {
    code: 'DAWR',
    name: 'Dawson Reef',
    length: '5 nights',
    start: '2026-07-01',
    resort: 'Coral Sands',
    perPerson: '999',
    image: 'reef2.jpg',
    description: 'Integer magna leo posuere vitae.'
  },
  {
    code: 'Test',
    name: 'Test Trip',
    length: '3 nights',
    start: '2026-08-01',
    resort: 'Test Resort',
    perPerson: '500',
    image: 'reef2.jpg',
    description: 'Created test trip'
  },
  {
    code: 'MEXICO',
    name: 'Riviera Maya Escape Deluxe',
    length: '7 nights',
    start: '2026-08-15',
    resort: 'Secrets Maroma Beach',
    perPerson: '1499',
    image: 'reef1.jpg',
    description: 'Luxury all-inclusive vacation in Riviera Maya, Mexico.'
  }
];

  constructor(private tripDataService: TripDataService) { }

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data) => {
        console.log('Trips from API:', data);
        this.trips = [...this.trips, ...data];
      },
      error: (err) => {
        console.error('Error loading trips:', err);
      }
    });
  }
}
  