import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Documentari } from '../documentari/model/documentari';
import { Film } from '../film/model/film';
import { SerieTv } from '../serie-tv/model/serie-tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  completeList: any[] = [];
  searchText:string;
  listaserieTv: SerieTv[] = [];
  listaDocumentari: Documentari[] = [];
  listaFilm: Film[] = [];

  

  constructor(private http: HttpClient) {

    document.getElementById('toolbar').style.display = 'block'

    this.http.get<SerieTv[]>('http://localhost:3000/serie-tv')
    .subscribe((result: SerieTv[]) => {
      this.listaserieTv = result;
     console.log(result);
    });

    this.http.get<Film[]>('http://localhost:3000/film')
    .subscribe((result: Film[]) => {
      this.listaFilm = result;
      console.log(result);

    });

    this.http.get<Documentari[]>('http://localhost:3000/documentari')
    .subscribe((result: Documentari[]) => {
      this.listaDocumentari = result;
      console.log(result);

    });


  // provate a fare una generic list
  // che abbia tutti i film o
  // tipizzando una interfaccia/classe
  //  avente tutte le informazioni sia di documentari, che di film e serie tv

    // this.completeList.push(this.listaDocumentari)
    // console.log('complete list', this.completeList);

  }


  ngOnInit() {



  }
  eventSearch(event){
    this.searchText = event;

  }

  

}
