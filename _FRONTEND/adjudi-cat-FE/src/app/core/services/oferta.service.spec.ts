import { TestBed } from '@angular/core/testing';

import { OfertaService } from './oferta.service';

describe('LicitarService', () => {
  let service: OfertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
