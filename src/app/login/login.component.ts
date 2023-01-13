import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../service/auth.service';
import { RouterServiceService } from '../service/router-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userId: new FormControl,
    password: new FormControl
  });

  constructor(private authService: AuthService,private fb:FormBuilder,
    private routerService: RouterServiceService ,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  @Output() 
  loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  get userId() { return this.loginForm.get("userId") }
  get password() { return this.loginForm.get("password") }

  validateUserCode() {
    console.log(this.loginForm.value);
    
    if((this.userId?.value==="User")&&(this.password?.value === "2022")) {
      this.authService.login();
      this.loggedIn.emit(true);
      this.routerService.toHome();
      
      this._snackBar.open('you are Logged In', 'ok', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      
    }
    else{
      this._snackBar.open('Invalid User Name or password', 'ok', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    }
    
  
  }

}
