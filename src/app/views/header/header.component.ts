import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  userToken:any;
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.userToken = JSON.parse(localStorage.getItem('user')!)
  }

  ngDoCheck(): void {
    this.userToken = JSON.parse(localStorage.getItem('user')!)
  }

  cerrarSesion() : void {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
