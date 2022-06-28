import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any = {
    userName: "",
    userPass: "",
  }

  admin: any = {
    userName: "Elodie",
    userPass: "4321",
  }

  c: boolean = false
  d: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  verifConnect(form: any) {
    this.user.userName = form.userName
    this.user.userPass = form.userPass
    console.log(this.user.userName, this.user.userPass)

    if (this.user.userName === this.admin.userName && this.user.userPass === this.admin.userPass) {
      this.c = true
      this.d = false
      // alert ("Bienvenue")
    }

    else {
      this.d = true
    }
  }

  deconnect(){
    this.c = false
  }


}
