import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000';

  login(data: { username: string; password: string }) {
    return this.http.post(`${this.apiUrl}/api/token/`, data);
  }

  me() {
    return this.http.get(`${this.apiUrl}/api/me/`);
  }
}
