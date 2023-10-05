import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Documentari } from './model/documentari';

@Component({
  selector: 'app-documentari',
  templateUrl: './documentari.component.html',
  styleUrls: ['./documentari.component.scss']
})
export class DocumentariComponent implements OnInit {
  searchText:string;
  listaDocumentari: Documentari[] = [];
 

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Documentari[]>('http://localhost:3000/documentari')
    .subscribe((result: Documentari[]) => {
      this.listaDocumentari = result;
    });
  }
  eventSearch(event){
    this.searchText = event;

  }

}
