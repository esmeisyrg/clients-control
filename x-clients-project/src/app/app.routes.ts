import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientsDetailComponent } from './components/clients-detail/clients-detail.component';
import { LoadingScreenComponent } from './pages/loading-screen-.component';

export const routes: Routes = [
  { path: '', component: LoadingScreenComponent },
  { path: 'clients', component: ClientsListComponent },
  { path: 'client/:id', component: ClientsDetailComponent },
  { path: '**', redirectTo: '/clients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
