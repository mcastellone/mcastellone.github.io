import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.html',
  styleUrls: ['./edit-trip.css']
})
export class EditTrip implements OnInit {

  trip: any = {};
  tripCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    this.tripCode =
      this.route.snapshot.paramMap.get('tripCode') ||
      this.route.snapshot.paramMap.get('code') ||
      '';

    this.tripDataService.getTrip(this.tripCode).subscribe({
      next: (data) => {
        this.trip = data;
        this.tripCode = data.code;
      },
      error: (err) => {
        console.error('Error loading trip:', err);
      }
    });
  }

  updateTrip(): void {
  this.trip.code = this.tripCode || this.trip.code || 'GALE';

  this.tripDataService.updateTrip(this.trip).subscribe({
    next: () => {
      alert('Trip updated successfully');
      this.router.navigate(['/trips']);
    },
    error: (err) => {
      console.error('FULL UPDATE ERROR:', err);
      alert('Error updating trip: ' + err.status + ' ' + err.statusText);
    }
  });
}
}