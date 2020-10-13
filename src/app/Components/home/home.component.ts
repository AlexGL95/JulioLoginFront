import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = '';
  nombre = 'pepe';
  salt = 'sin generar';
  pass = 'ninguna';
  passc = 'sin cifrar';
  constructor(
    private auth: AuthserviceService,
  ) { }

  ngOnInit(): void {
    this.id = this.auth.leerid();
    this.nombre = this.auth.leeruser();
    this.pass = this.auth.leerpass();
    this.passc = this.auth.leerpassc();
    this.salt = this.auth.leersalt();
  }

}
