import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-dettagli-prenotazione',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettagli-prenotazione.html'
})
export class DettagliPrenotazioneComponent {
  @Input() prenotazione: Prenotazione | null = null;
}