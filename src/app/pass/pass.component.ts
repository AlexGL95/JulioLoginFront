import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  cadenaCifrada = '';
  cadenaDescifrada = '';
  constructor() { }

  ngOnInit(): void {
  }

  cifrador( cadena: string ): void {

  }
}
