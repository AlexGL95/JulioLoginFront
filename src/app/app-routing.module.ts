import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './Components/singin/singin.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PassComponent } from './pass/pass.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Singin', component: SinginComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Cifrado', component: PassComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
