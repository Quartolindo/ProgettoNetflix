import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NavbarComponent } from 'src/app/core/navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  

  constructor(public auth: AuthService) {

    document.getElementById('toolbar').style.display = 'none'
  }

}
