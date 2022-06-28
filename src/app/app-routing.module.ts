import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChambresComponent } from './components/chambres/chambres.component';
import { GestionchambresComponent } from './components/gestionchambres/gestionchambres.component';
import { gestionReservationComponent } from './components/gestionReservations/gestionReservation.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"chambres", component: ChambresComponent},
  {path:"gestionchambres", component: GestionchambresComponent},
  {path:"gestionReservation", component: gestionReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
