import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Film } from './model/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  listaFilm: Film[] = [];
  searchText:string;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Film[]>('http://localhost:3000/film')
    .subscribe((result: Film[]) => {
      this.listaFilm = result;
    });
  }x


  eventSearch(event){
    this.searchText = event;

  }
}
