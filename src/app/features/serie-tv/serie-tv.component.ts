import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SerieTv } from './model/serie-tv';

@Component({
  selector: 'app-serie-tv',
  templateUrl: './serie-tv.component.html',
  styleUrls: ['./serie-tv.component.scss']
})
export class SerieTvComponent {
  listaserieTv: SerieTv[] = [];
  searchText:string;
  constructor(private http: HttpClient) {

  }
  
  ngOnInit() {
    this.http.get<SerieTv[]>('http://localhost:3000/serie-tv')
    .subscribe((result: SerieTv[]) => {
      this.listaserieTv = result;
    });
  }
  eventSearch(event){
    this.searchText = event;

  }
}