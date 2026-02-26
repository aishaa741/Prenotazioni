import { TestBed } from "@angular/core/testing";

import { Prenotazioni } from "./prenotazioni";

describe("Prenotazioni", () => {
  let service: Prenotazioni;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prenotazioni);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
