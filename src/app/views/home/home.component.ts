import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private api : ApiService, private router:Router) { }
  errorMsg:string = "";
  showCard:boolean = false;

  login:any = {
    email:"",
    contrasenia:""
  }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.login.email != "" && this.login.contrasenia != ""){
        this.api.login(this.login).subscribe((res: any)=>{
        localStorage.setItem('tokenUser', res.token);
        localStorage.setItem('user', JSON.stringify(res.user))
        this.router.navigate(['library']);
      }, err=>{
        this.showCard = true;
        this.errorMsg = "Correo o contraseña incorrectos"
      })
    } else{
      this.showCard = true
      this.errorMsg = "Debe de llenar todos los campos"
    }
  }

  bottonRegister(){
    this.router.navigate(['register'])
  }
}
