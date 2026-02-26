import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DettagliPrenotazione } from "./dettagli-prenotazione";

describe("DettagliPrenotazione", () => {
  let component: DettagliPrenotazione;
  let fixture: ComponentFixture<DettagliPrenotazione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliPrenotazione],
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliPrenotazione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
