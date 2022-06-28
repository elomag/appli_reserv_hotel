import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/service/gestion.service';
import { ChambresService } from 'src/app/service/chambres.service';


@Component({
  selector: 'app-gestionchambres',
  templateUrl: './gestionchambres.component.html',
  styleUrls: ['./gestionchambres.component.css']
})
export class GestionchambresComponent implements OnInit {

  chambres: any;
  chambre: any;

  chambremodifiee = {
    id:Number,
    img: "",
    title: "",
    description: "",
    exposure: "",
    category: "",
    price: "",
    standing: "",
  };

  constructor(private gestionService: GestionService, private chambresService: ChambresService) { }

  ngOnInit(): void {
     this.chambresDispo()
  }

  chambresDispo(){
    this.chambresService.getChambres().subscribe(data=>{
      this.chambres = data;
      // console.log(this.chambres)
    })
  }

  recupChambre(chambre:any){
    this.chambremodifiee
  }


  // méthode de récupération des données de la chambre sélectionnée
  // ??? POURQUOI PAS service GET ???
  recupchambre(chambre: any) {
    this.chambremodifiee = chambre;
    console.log(this.chambremodifiee);
  }
  
  // méthode de suppression de la chambre sélectionnée par click sur bouton
  // DELETE
  suppressionchambre(id: any) {
    this.gestionService.deleteChambre(id).subscribe(data => {
      this.chambres = data;
      alert("chambre d'id: " + id + "supprimée ")
    this.chambresDispo()
      // console.log(this.chambres);
    })
  }

  // méthode de modification de la chambre sélectionnée dans la modale
  // PUT 
  modificationchambre() {
    
    this.gestionService.modifierChambre(this.chambremodifiee).subscribe(data=>{
      this.chambresDispo()
      alert("Les données ont bien été modifiées")
    })
  // modificationchambre() {
  //     this.gestionService.modifierChambre(this.chambremodifiee).subscribe
    alert("Les données ont bien été modifiées")
  }

edit(c:any){
  this.chambremodifiee.id = c.id
  this.chambremodifiee = c
  
}
  // méthode d'ajout d'une nouvelle chambre par click sur bouton
  // POST
  saveNouvelleChambre(chambre: any) {
    let data = chambre.value
    this.gestionService.saveChambre(data).subscribe(data => {
      console.log(data);
      
      // alert("Les nouvelles données ont été enregistrées")
    })
  }



}
