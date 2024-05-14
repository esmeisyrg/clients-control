import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/clients.service';
import { Client } from '../../models/client.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  displayedClients: Client[] = [];
  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 0
  pages: number[] = [];
  searchTerm: string = '';

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.clients = this.clientService.getClients().map(client => ({
      id: client.id,
      name: client.name,
      addresses: client.addresses.slice(0, 1),
      image: client.image
    }));
    this.totalPages = Math.ceil(this.clients.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    this.displayedClients = this.clients.slice(startIndex, startIndex + this.pageSize);
  }

  searchClients() {
    if (!this.searchTerm) {
      this.fetchClients();
      return;
    }
    this.clients = this.clients.filter(client => client.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.totalPages = Math.ceil(this.clients.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.setPage(1);
  }
}