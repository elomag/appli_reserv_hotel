import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http : HttpClient) { }

// service de récupération des données depuis json
// GET ***Utiliser pour renvoyer les données actualisées depuis json
// Attention: IDEM QUE getChambres dans chambre.service.ts (on peut en supprimer 1)
donneesChambres() {
  return this.http.get("http://localhost:3000/chambres");
}

// service de suppression de la chambre selon son id
// DELETE du CRUD 
deleteChambre(id:any){
  return this.http.delete("http://localhost:3000/chambres/" + id)
}
// service d'ajout (création) d'une nouvelle chambre
// CREATE du CRUD
saveChambre(chambre:any){
  return this.http.post("http://localhost:3000/chambres", chambre)
}
// service de modification de la chambre sélectionnée par son id
// UPDATE du CRUD
modifierChambre(chambre:any){
  return this.http.put("http://localhost:3000/chambres/"+chambre.id, chambre);
}

getReservations() {
  return this.http.get("http://localhost:3000/reservations");
}

confirmation(id:any, confirme:any){
  return this.http.patch("http://localhost:3000/reservations/"+id,{confirme:!confirme});
}

}
