import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prenotazione } from './prenotazione.model';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  private apiUrl = 'https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni';

  constructor(private http: HttpClient) { }

  getPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.apiUrl);
  }

  aggiungiPrenotazione(prenotazione: Prenotazione): Observable<Prenotazione> {
    return this.http.post<Prenotazione>(this.apiUrl, prenotazione);
  }
}