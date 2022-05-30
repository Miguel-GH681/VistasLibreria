import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  lend:any = {
    id_libro: "",
    id_usuario: ""
  };
  userToken:any;
  lends:any =[];

  ngOnInit(): void {
    this.userToken = JSON.parse(localStorage.getItem('user')!);
    this.allLends(this.userToken.id_usuario);
  }

  allLends(id:any): void{
    this.api.getMyLends(id).subscribe((res: any)=>{
      this.lends = res;
    })
  }

  saveData(i:any): void{
    this.lend.id_libro = this.lends[i].id_libro;
    this.lend.id_usuario = this.userToken.id_usuario;
    this.deleteBook(this.lend);
  }

  deleteBook(data:any):void{
    this.api.deleteLendBook(data).subscribe((res:any)=>{
      this.allLends(this.userToken.id_usuario);
    })
  }
}
