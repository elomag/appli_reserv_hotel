import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'; // import rajouté auto suite à installation NgxPaginationModule
// const endpoint = 'https://jsonplaceholder.typicode.com/posts'; // saisie manuelle < infos trouvées sur Net


@Injectable({
  providedIn: 'root'
})
export class ChambresService {

  constructor(private http: HttpClient) { }

  // SERVICE pour renvoyer à l'appli depuis json
  // Attention: IDEM QUE donneesChambres dans gestion.service.ts (on peut en supprimer 1)
  getChambres() {
    return this.http.get("http://localhost:3000/chambres");
  }

  // SERVICE d'ENREGISTREMENT de la RESERVATION de CHAMBRE / CLIENT
  savereservation(reservation: any) {
    return this.http.post("http://localhost:3000/reservations", reservation);
  }

  // SERVICE de TRI par CATEGORIE (chambre double / simple)
  getByCategory(c: any) {
    return this.http.get(`http://localhost:3000/chambres?category=${c}`);
  }

  // SERVICE de TRI par PRIX
  getByPrice(min: any, max: any) {
    return this.http.get(`http://localhost:3000/chambres?price_gte=${min}&price_lte=${max}`);
  }


  // *************** pour PAGINATION:
  // SERVICE de limitation d'affichage des chambres / page
  getPagination(p:any, limite:any) {
    return this.http.get(`http://localhost:3000/chambres?_page=${p}&_limit=${limite}`);
  }
  // *************** pour PAGINATION: selon infos trouvées sur Net
// getAllPosts(Observable:any){
//   return this.http.get(endpoint);
// }



}
