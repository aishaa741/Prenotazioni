// Questo è il MODELLO. Dice ad Angular quali dati ci sono in una prenotazione.
export interface Prenotazione {
  nome: string;
  cognome: string;
  indirizzo: string;
  telefono: string;
  email: string;
  data: string;
  ora: string;
  id?: number; // L'id lo mette il server da solo, per questo c'è il punto di domanda
}