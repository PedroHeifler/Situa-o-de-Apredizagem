import { TestBed } from '@angular/core/testing';

import { AnunciarService } from './anunciar.service';

describe('AnunciarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnunciarService = TestBed.get(AnunciarService);
    expect(service).toBeTruthy();
  });
});
