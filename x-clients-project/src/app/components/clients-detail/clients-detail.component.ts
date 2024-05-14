import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/clients.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class ClientsDetailComponent implements OnInit {
  client: Client | undefined;
  newAddress: string = '';
  editingIndex: number | null = null;
  editedAddress: string = '';

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router, 
    
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.client = this.clientService.getClientById(id);
      } else {
        console.error('Invalid client ID:', id);
      }
    });
  }
  
  goBack() {
    this.router.navigate(['/clients']); 
  }

  addAddress(): void {
    if (this.client && this.newAddress.trim()) {
      this.client.addresses.push(this.newAddress);
      this.newAddress = '';
    }
  }

  editAddress(index: number, address: string): void {
    this.editingIndex = index;
    this.editedAddress = address;
  }

  saveEditedAddress(): void {
    if (this.client && this.editingIndex !== null && this.editedAddress.trim()) {
      this.client.addresses[this.editingIndex] = this.editedAddress;
      this.editingIndex = null;
      this.editedAddress = '';
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
    this.editedAddress = '';
  }

  deleteAddress(index: number): void {
    if (this.client) {
      this.client.addresses.splice(index, 1);
    }
  }
}
