import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';  


@Component({
  selector: 'app-loading-screen',
  standalone: true,  
  styleUrls: ['./loading-component.css'],
  imports: [
    CommonModule 
  ],
  template: `
    <div class=" app-container d-flex justify-content-center align-items-center">
      <div class="text-center">
        <h1>Bienvenido a X-Enterprises</h1>
        <p>Acceda a las direcciones de nuestros clientes y modifique a su gusto.</p>
   
        <div *ngIf="showButton" class="fade-in">
          <button class="btn btn-primary" (click)="startApplication()">Iniciar</button>
        </div>
      </div>
    </div>
  

  `,
  styles: [`
    .fade-in {
      animation: fadeIn 2s;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `]
  
})
export class LoadingScreenComponent {
  showButton: boolean = false;  

  constructor(private router: Router) {
    setTimeout(() => this.showButton = true, 2000);
  }

  startApplication() {
    this.router.navigate(['/clients']);
  }
}
