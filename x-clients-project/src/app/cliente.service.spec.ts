import { TestBed } from '@angular/core/testing';

import { ClientService } from './services/clients.service';


describe('ClienteService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
