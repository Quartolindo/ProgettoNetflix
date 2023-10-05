import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './features/film/film.component';
import { SerieTvComponent } from './features/serie-tv/serie-tv.component';
import { DocumentariComponent } from './features/documentari/documentari.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CardPreviewComponent } from './shared/components/card-preview/card-preview.component';
import { HomeComponent } from './features/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';
import { FormsModule} from '@angular/forms';
import { PreferitiComponent } from './features/preferiti/preferiti.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './features/login/login.component';
import { AuthService } from './auth/auth.service';
import { SearchComponent } from './shared/components/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { InfoDialogComponent } from './shared/components/info-dialog/info-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import { StepperEditableExample } from './features/stepper-editable-example/stepper-editable-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoProfileComponent } from './features/info-profile/info-profile.component';
import {MatListModule} from '@angular/material/list';



const MATERIAL_MODULE = [
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatDialogModule,
  MatSelectModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  ReactiveFormsModule,
  MatListModule
];

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    SerieTvComponent,
    DocumentariComponent,
    NavbarComponent,
    CardPreviewComponent,
    HomeComponent,
    FilterPipe,
    PreferitiComponent,
    LoginComponent,
    SearchComponent,
    InfoDialogComponent,
    SignUpComponent,
    StepperEditableExample,
    InfoProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MATERIAL_MODULE
  ],
  providers: [{ provide: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
