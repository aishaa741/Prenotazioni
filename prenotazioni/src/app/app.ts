import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni';
import { DettagliPrenotazioneComponent } from './dettagli-prenotazione/dettagli-prenotazione';
import { Prenotazione } from './prenotazione.model';
import { PrenotazioniService } from './prenotazioni';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaPrenotazioniComponent, DettagliPrenotazioneComponent],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  prenotazioni: Prenotazione[] = [];
  prenotazioneSelezionata: Prenotazione | null = null;
  errore: string = '';
  nuovaPrenotazione: Prenotazione = { nome: '', cognome: '', indirizzo: '', telefono: '', email: '', data: '', ora: '' };

  constructor(private prenotazioniService: PrenotazioniService) {}

  ngOnInit() {
    this.prenotazioniService.getPrenotazioni().subscribe((data: Prenotazione[]) => {
      this.prenotazioni = data;
    });
  }

  salvaPrenotazione() {
    // Controllo per evitare prenotazioni doppie (stessa data e ora)
    const duplicato = this.prenotazioni.find(p => p.data === this.nuovaPrenotazione.data && p.ora === this.nuovaPrenotazione.ora);
    if (duplicato) {
      this.errore = "Errore: Esiste già una visita per questo giorno e ora!";
      return;
    }
    
    this.errore = '';
    this.prenotazioniService.aggiungiPrenotazione(this.nuovaPrenotazione).subscribe((res: Prenotazione) => {
      this.prenotazioni.push(res);
      // Svuota la form
      this.nuovaPrenotazione = { nome: '', cognome: '', indirizzo: '', telefono: '', email: '', data: '', ora: '' };
    });
  }
}
