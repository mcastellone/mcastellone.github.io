import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('travlr-token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTrip(trip: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, trip, {
      headers: this.getAuthHeaders()
    });
  }

  getTrip(tripCode: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${tripCode}`);
  }

  updateTrip(trip: any): Observable<any> {
    const code = trip.code || trip.tripCode || 'GALE';

    return this.http.put<any>(
      `${this.apiUrl}/${code}`,
      {
        code: code,
        name: trip.name,
        length: trip.length,
        start: trip.start,
        resort: trip.resort,
        perPerson: trip.perPerson,
        image: trip.image,
        description: trip.description
      },
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${tripCode}`, {
      headers: this.getAuthHeaders()
    });
  }
}