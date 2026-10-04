import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-trip.html',
  styleUrls: ['./add-trip.css']
})
export class AddTrip {

  trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(private tripDataService: TripDataService) {}

  onSubmit(): void {
    this.tripDataService.addTrip(this.trip).subscribe({
      next: (result) => {
        console.log('Trip added!', result);
        alert('Trip added successfully!');
      },
      error: (error) => {
        console.error('Full error:', error);
        alert('Error adding trip: ' + error.status + ' - ' + error.message);
      }
    });
  }
}