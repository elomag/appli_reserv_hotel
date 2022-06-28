import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/service/gestion.service';
import { ChambresService } from 'src/app/service/chambres.service';

@Component({
  selector: 'app-gestionReservation',
  templateUrl: './gestionReservation.component.html',
  styleUrls: ['./gestionReservation.component.css']
})

export class gestionReservationComponent implements OnInit {
  reservations: any;

  constructor(private gestionService: GestionService, private chambresService: ChambresService) { }

  ngOnInit(): void {
    this.reservationsEnregistrees();
  }

  reservationsEnregistrees(): void {
    this.gestionService.getReservations().subscribe(data => {
      this.reservations = data;
      console.log(this.reservations)
      console.log(this.chambresService.savereservation);
      
    })
  }

  // méthode pour confirmation
  changeConfirmation(r: any): void {
    console.log(r.confirme);

    this.gestionService.confirmation(r.id, r.confirme).subscribe(data => {
      this.reservationsEnregistrees();
    })
  }






}
