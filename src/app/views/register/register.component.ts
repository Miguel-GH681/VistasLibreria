import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  showCard:any;
  errorMsg:any;
  newUser = new UserModel(0,'', '', '', '', '', '', '', '', '', '', 0);
  userToken:any;
  grados:any;

  ngOnInit(): void {
    this.userToken = JSON.parse(localStorage.getItem('user')!);
    this.getAllGrades();
  }

  register(): void{    
    if(this.newUser.nombres != "" && this.newUser.apellidos != "" && this.newUser.username != ""
    && this.newUser.contrasenia != "" && this.newUser.telefono != "" && this.newUser.sexo != ""
    && this.newUser.direccion != "" && this.newUser.roll != "" && this.newUser.edad != ""
    && this.newUser.id_grado != null && this.newUser.email != ""){
      this.api.addUser(this.newUser).subscribe((req:any)=>{
        this.router.navigate(['home']);
      }) 
    } else{
      this.showCard = true;
      this.errorMsg = "Debe llenar todos los campos";
    }
  }

  getAllGrades(): void{
    this.api.getGrados().subscribe((req: any)=>{
      this.grados = req;
    })
  }
}
