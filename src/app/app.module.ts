import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ChambresComponent } from './components/chambres/chambres.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GestionchambresComponent } from './components/gestionchambres/gestionchambres.component';
import { gestionReservationComponent } from './components/gestionReservations/gestionReservation.component';

import { HttpClientModule} from '@angular/common/http';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChambresComponent,
    NavbarComponent,
    GestionchambresComponent,
    gestionReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
