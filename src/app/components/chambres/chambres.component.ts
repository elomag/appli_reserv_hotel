import { Component, OnInit } from '@angular/core';
import { ChambresService } from 'src/app/service/chambres.service';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {

  chambres: any;

  reservation: any = {
    nameClient: "",
    arrivaldate: "",
    dureereservation: "",

    chamberprice: Number,
    chambertitle: "",
  }

  categories = ["chambre double", "chambre simple"]

  pages = [1, 2, 3, 4]


  constructor(private chambresService: ChambresService) { }

  ngOnInit(): void {
    // this.chambresDispo();  plus besoin après pagination
    this.pagination(0);
  }

  chambresDispo() {
    this.chambresService.getChambres().subscribe(data => {
      this.chambres = data;
      console.log(this.chambres)
    })
  }

  book(c: any) {
    this.reservation.chambertitle = c.title;
    this.reservation.chamberprice = c.price
    console.log("tout mon objet : ", this.reservation);
  }

  reserverConfirmation(form: any) {
    this.reservation.nameClient = form.nameClient;
    this.reservation.arrivaldate = form.dateArriver
    this.reservation.dureereservation = form.nombreJour

    this.reservation.totalPrice = (this.reservation.chamberprice * this.reservation.dureereservation)

    console.log("mon objet complet :  ", this.reservation);
    this.chambresService.savereservation(this.reservation).subscribe(data => {
      console.log("success ...", data);
    })
  }

  // test(){
  //   alert("ce test fonctionne")
  // }

  totalPriceReservation() {
    this.chambres.price
  }

  categoryFilter(c: any) {
    this.chambresService.getByCategory(c).subscribe(result => {
      // console.log(c);
      this.chambres = result;
    })
  }

  priceFilter(f: any) {
    this.chambresService.getByPrice(f.min, f.max).subscribe(result => {
      this.chambres = result;
      console.log(this.chambres);
      alert("priceFilter fonctionne")
    })
  }

  pagination(p: any) {
    let limite = 3;
    this.chambresService.getPagination(p, limite).subscribe(result => {
      this.chambres = result;
    })
  }


}
