import { TestBed } from '@angular/core/testing';

import { ServCOVIDLifeService } from './serv-covid-life.service';

describe('ServCOVIDLifeService', () => {
  let service: ServCOVIDLifeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCOVIDLifeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
