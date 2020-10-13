import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usuariomodel } from 'src/app/Models/Usuario.model';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  user: usuariomodel;
  constructor(
    private router: Router,
    private auth: AuthserviceService
  ) { }

  ngOnInit(): void {
  }

  singup( nombre: string, pass: string){
    if (nombre && pass) {
        this.user = {
        nombre,
        pass
      };
        console.log('que pedo', this.user);
        this.auth.login(this.user).subscribe(
          resp => {
           this.router.navigate(['/Home']);
          });
    }
  }
}
