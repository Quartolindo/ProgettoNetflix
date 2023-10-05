import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';


@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss']
})
export class InfoProfileComponent {
  @Input() dataProfile: any;

  mergeValueForm: any;

  constructor(private profileService: ProfileService) {

    this.getProfile();
  }


  getProfile() {
    this.profileService.getProfile().subscribe(res => {
      console.log("res",res);
      this.mergeValueForm = res;
      
    })
}

}
