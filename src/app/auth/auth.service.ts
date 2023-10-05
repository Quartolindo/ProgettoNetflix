import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { Auth } from "./auth";


@Injectable({
providedIn: 'root'
})

export class AuthService {
    data!: Auth;
constructor(
    private http: HttpClient,
    private router: Router
    ) {}
    login(formData: any) {
        const params = new HttpParams()
        .set('user', formData.user)
        .set('pass', formData.pass);

        this.http.get<Auth>(`http://localhost:3000/login`, {params})
        .subscribe(res => {
            this.data = res;
            this.router.navigateByUrl('/home');
        });

    }

    logout() {
        /*this.data;*/
        this.router.navigateByUrl('/login');

    }
    isLogged() {
        return !!(this.data && this.data.token);
      }

}