import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientsDetailComponent } from './components/clients-detail/clients-detail.component';
import { LoadingScreenComponent } from './pages/loading-screen-.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    RouterOutlet,  
    ClientsListComponent, 
    ClientsDetailComponent,
    LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'x-clients-project';
}
