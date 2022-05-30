import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint = 'http://localhost:5000/api/';

  constructor(private http:HttpClient){ }

  public login(dataUser:any){
    return this.http.post(this.endpoint + 'login', dataUser)
  }

  public getAllBooks():Observable<any>{
    return this.http.get(this.endpoint + 'getBooks')
  }

  public postLendBook(data:any){
    return this.http.post(this.endpoint + 'addLendBook', data)
  }

  public getGrados():Observable<any>{
    return this.http.get(this.endpoint + 'getGrades')
  }

  public addUser(dataUser:any){
    return this.http.post(this.endpoint + 'addUser', dataUser)
  }

  public getMyLends(id:any):Observable<any>{
    return this.http.get(this.endpoint + 'getMyBooks/' + id)
  }

  public deleteLendBook(dataUser: any){
    return this.http.post(this.endpoint + 'deleteLendBook', dataUser);
  }
}


