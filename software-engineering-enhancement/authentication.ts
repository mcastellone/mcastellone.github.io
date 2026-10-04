import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }

  getToken(): string {
    return localStorage.getItem('travlr-token') || '';
  }

  logout(): void {
    localStorage.removeItem('travlr-token');
  }

  isLoggedIn(): boolean {
    return this.getToken().length > 0;
  }
}