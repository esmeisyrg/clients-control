import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, name: 'Ashley Tisdale', image: '../../assets/images/ashley.png', addresses: ['123 Elm St', '456 Oak St', '789 Pine St'] },
    { id: 2, name: 'Vanessa Hudgens', image: '../../assets/images/vanessa.webp', addresses: ['1010 Maple Ave', '2020 Birch Ave', '3030 Cedar Ave'] },
    { id: 3, name: 'Will Smith', image: '../../assets/images/will.webp', addresses: ['250 Park Blvd', '350 Lake Blvd', '450 Creek Blvd'] },
    { id: 4, name: 'Pablo Guzmán', image: '../../assets/images/pablo.webp', addresses: ['1 Plaza Rd', '2 Vista Rd', '3 Ridge Rd'] },
    { id: 5, name: 'Michael Ramirez', image: '../../assets/images/meys.jpg', addresses: ['100 Main St', '200 North St', '300 West St'] },
    { id: 6, name: 'Juana Rosario', image: '../../assets/images/ana.png',  addresses: ['99 River Rd', '88 Brook Rd', '77 Stream Rd'] },
    { id: 7, name: 'Annie', image: 'https://picsum.photos/200/300', addresses: ['123 Elm St', '456 Oak St', '789 Pine St'] },
    { id: 8, name: 'Vane Smith', image: 'https://picsum.photos/100/300', addresses: ['1010 Maple Ave', '2020 Birch Ave', '3030 Cedar Ave'] },
    { id: 9, name: 'William', image: 'https://picsum.photos/120/300', addresses: ['250 Park Blvd', '350 Lake Blvd', '450 Creek Blvd'] },
    { id: 10, name: 'Emma', image: 'https://picsum.photos/110/300', addresses: ['1 Plaza Rd', '2 Vista Rd', '3 Ridge Rd'] },
    { id: 11, name: 'Miguelina', image: 'https://picsum.photos/140/300', addresses: ['100 Main St', '200 North St', '300 West St'] },
];

  constructor() {}

  getClients(): Client[] {
    return this.clients;
  }

  getClientById(id: number): Client | undefined {
    return this.clients.find(client => client.id === id);
  }
}
