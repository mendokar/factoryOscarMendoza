import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  userType:any;
  
  constructor(private routEx:Router) {
    this.profileForm = new FormGroup({
      login: new FormControl(null,Validators.required),
      password: new FormControl(null, Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    if(this.userType === 'Cliente'){
      this.routEx.navigate(['add-pedidos']);
    }

  }

  /**
   * cliente
   */
  public cliente() {
    this.userType = 'Cliente';
    this.profileForm.controls.login.setValue('cliente@gmail.com');
    this.profileForm.controls.password.setValue('qwerty');
  }

  /**
   * restaurante
   */
  public restaurante() {
    this.userType = 'Restaurante';
    this.profileForm.controls.login.setValue('restaurante@gmail.com');
    this.profileForm.controls.password.setValue('qwerty');
  }

}
