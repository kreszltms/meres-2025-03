import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api'; // A szerver alap URL-je

  constructor(private http: HttpClient) { }

  // Hirdetések lekérése
  getOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ingatlan`);
  }

  // Kategóriák lekérése
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/kategoriak`);
  }

  // Új hirdetés küldése
  postNewAd(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ujingatlan`, data);
  }
}