import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent {

  listFavorite:any;
  constructor(private http: HttpClient) {}

  
 ngOnInit(): void {

  

    /*richiamo il metodo che ho creato sotto es: getPreferiti*/
this.getPreferiti();

  }
getPreferiti() {
  this.http.get('http://localhost:3000/preferiti')
  .subscribe(result => this.listFavorite = result);{
  }
/*this.favorite = result prende il risultato della chiamata e lo salva in listFavorite*/
}


}
