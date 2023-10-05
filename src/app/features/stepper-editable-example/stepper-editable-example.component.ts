import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, AbstractControl, ValidationErrors, MinLengthValidator, } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/service/profile.service';



@Component({
  selector: 'app-stepper-editable-example',
  templateUrl: './stepper-editable-example.component.html',
  styleUrls: ['./stepper-editable-example.component.scss'],

})
export class StepperEditableExample implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  summaryFormGroup: FormGroup;
  selectedIndex: number = 0;
  mergeValueForm: any;
  minimumAge: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 18));


  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  numberPattern = "^[0-9]*$";



  isEditable = true;

  constructor(private _formBuilder: FormBuilder, public auth: AuthService, private http: HttpClient, private profileService: ProfileService) {
    document.getElementById('toolbar').style.display = 'none'



  }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      surnameCtrl: ['', Validators.required],
      ageCtrl: ['',Validators.required],
      addressCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      nicknameCtrl: ['', [Validators.required, Validators.minLength(8)]],
      telephoneCtrl: ['', [Validators.required, Validators.pattern(this.numberPattern)]],
      emailCtrl: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      confirmEmailCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required],
      confirmPasswordCtrl: ['', Validators.required],
    }, {
      validators: [this.passwordMatchValidator(), this.confirmEmail()]
    });

    this.addProfile();

  }

  passwordMatchValidator(): ValidatorFn {

    return (secondFormGroup: FormGroup): ValidationErrors | null => {
      const password = secondFormGroup.get('passwordCtrl').value;
      const confirmPassword = secondFormGroup.get('confirmPasswordCtrl').value;
      if (password != confirmPassword) {
        return { passwordsNotMatch: true };
      }
      return null
    }
  }

  confirmEmail(): ValidatorFn {
    return (secondFormGroup: FormGroup): ValidationErrors | null => {
      const email = secondFormGroup.get("emailCtrl").value
      const confemail = secondFormGroup.get("confirmEmailCtrl").value
      if(email != confemail) {
        return { emailNotMatch: true };
      }
      return null
    }

}



  get emailCtrl() {
    return this.secondFormGroup.get('emailCtrl');
  }
  get telephoneCtrl() {
    return this.secondFormGroup.get('telephoneCtrl');
  }
  get nicknameCtrl() {
    return this.secondFormGroup.get('nicknameCtrl');
}

  setIndex(event) {
    this.selectedIndex = event.selectedIndex;
    if (this.selectedIndex == 2) {

      const mergedForm = new FormGroup(
        Object.assign({}, this.firstFormGroup.controls, this.secondFormGroup.controls)
      );

      this.mergeValueForm = mergedForm.value;
    }
  }

  addProfile() {
    this.profileService.addProfile('http://localhost:3000/profilo',this.mergeValueForm)
    .subscribe(result => {

    })
  }

}


