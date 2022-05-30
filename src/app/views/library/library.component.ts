import { Component, DoCheck, OnInit } from '@angular/core';
import { LendModel } from 'src/app/models/lend.model';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libros:any = [];
  lend:any;
  ubication:boolean = false;
  lends:any = [];
  userToken:any;
  book = new LendModel(0, 0, new Date('2022-05-21'), 'nota');  

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.userToken = JSON.parse(localStorage.getItem('user')!);
    this.getBooks();
    this.myLends();
  }

  myLends():void{
    this.api.getMyLends(this.userToken.id_usuario).subscribe((res:any)=>{
      this.lends = res;
    })
  }

  getBooks(): void{
    this.api.getAllBooks().subscribe((res:any)=>{
      this.libros = res;
    })
  }

  saveData(i:any){
    this.lend = this.libros[i];
    this.ubication = false;
    for (let index = 0; index < this.lends.length; index++) { 
      if(this.lends[index].id_libro == this.lend.id_libro){
        this.ubication = true
        break;
      }
    }
  }

  lendBook(): void{
    this.book.id_usuario = this.userToken.id_usuario;
    this.book.id_libro = this.lend.id_libro;
    this.api.postLendBook(this.book).subscribe((res:any)=>{
      this.getBooks();
      this.myLends();
    })
  }

  deleteLendBook(): void{
    this.book.id_usuario = this.userToken.id_usuario;
    this.book.id_libro = this.lend.id_libro;
    this.api.deleteLendBook(this.book).subscribe((res:any)=>{
      this.getBooks();
      this.myLends();
    })
  }
}
