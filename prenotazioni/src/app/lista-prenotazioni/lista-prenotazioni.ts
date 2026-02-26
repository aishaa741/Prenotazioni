import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-prenotazioni.html'
})
export class ListaPrenotazioniComponent {
  @Input() prenotazioni: Prenotazione[] = [];
  @Output() seleziona = new EventEmitter<Prenotazione>();
  
  selezionata: Prenotazione | null = null; // Ricorda chi è stato cliccato

  onClick(p: Prenotazione) {
    this.selezionata = p;
    this.seleziona.emit(p);
  }
}