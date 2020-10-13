// tslint:disable: no-string-literal
// tslint:disable: typedef
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuariomodel } from '../Models/Usuario.model';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url = 'http://localhost:3000';
  user: string;
  passc: string;
  pass: string;
  salt: string;
  id: string;

  constructor(private http: HttpClient) { }

  login( usuario: usuariomodel){
    const authData = { // payload para Log in de usuarios
      ...usuario
    };
    return this.http.post(
      `${ this.url}/usuario/auth`,
      authData
    ).pipe(
      map(resp => {
        this.storeuser( resp ['nombre']);
        this.storeid( resp['iduser']);
        this.storepassc( resp['passc']);
        this.storesalt( resp['salt'] );
        this.storepass( resp['passnc'] );
        console.log(resp);
        return resp;
      })
    );
  }

  storepassc(passc: string){
    this.passc = passc;
    localStorage.setItem('passc', this.passc);
  }

  storeuser(username: string){
    this.user = username;
    localStorage.setItem('nombre', username);
  }

  storeid(id: string){
    this.id = id;
    localStorage.setItem('id', this.id);
  }

  storesalt(salt: string){
    this.salt = salt;
    localStorage.setItem('salt', this.salt);
  }

  storepass(pass: string){
    this.pass = pass;
    localStorage.setItem('pass', this.pass);
  }

  leeruser(){
    if (localStorage.getItem('nombre')){
      this.user = localStorage.getItem('nombre');
    }else{
      this.user = '';
    }
    return this.user;
  }

  leerpassc(){
    if (localStorage.getItem('passc')) {
      this.passc = localStorage.getItem('passc');
    } else {
      this.passc = '';
    }
    return this.passc;
  }

  leersalt(){
    if (localStorage.getItem('salt')) {
      this.salt = localStorage.getItem('salt');
    } else {
      this.salt = '';
    }
    return this.salt;
  }

  leerpass(){
    if (localStorage.getItem('pass')) {
      this.pass = localStorage.getItem('pass');
    } else {
      this.pass = '';
    }
    return this.pass;
  }

  leerid(){
    if (localStorage.getItem('id')) {
      this.id = localStorage.getItem('id');
    } else {
      this.id = '';
    }
    return this.id;
  }
}
