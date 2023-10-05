import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentariComponent } from './features/documentari/documentari.component';
import { FilmComponent } from './features/film/film.component';
import { HomeComponent } from './features/home/home.component';
import { PreferitiComponent } from './features/preferiti/preferiti.component';
import { LoginComponent } from './features/login/login.component';
import { SerieTvComponent } from './features/serie-tv/serie-tv.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { StepperEditableExample } from './features/stepper-editable-example/stepper-editable-example.component';
import { InfoProfileComponent } from './features/info-profile/info-profile.component';

const routes: Routes = [
  { path: 'film', component: FilmComponent},
  { path: 'serie-tv', component: SerieTvComponent },
  { path: 'documentari', component: DocumentariComponent },
  { path: 'home', component: HomeComponent },
  { path: 'preferiti', component: PreferitiComponent },
  { path: 'info-profile', component: InfoProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stepper-editable-example', component: StepperEditableExample},
  { path: '', component: LoginComponent},
  { path: '**', redirectTo: 'home' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
