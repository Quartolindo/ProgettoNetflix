import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {

  }


  getProfile() {
    const url = "http://localhost:3000/profilo";

    return this.http.get<any>(url, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }
// model è any perché non abbiamo modelli del form
  addProfile(url: string, model: any ){
    return this.http.post(url,model)
  }


}


