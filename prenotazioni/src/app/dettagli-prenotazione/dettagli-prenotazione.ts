import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-dettagli-prenotazione',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettagli-prenotazione.html',
  styleUrls: ['./dettagli-prenotazione.css'] /* <-- AGGIUNGI QUESTA */
})
export class DettagliPrenotazioneComponent {
  @Input() prenotazione: Prenotazione | null = null;
}