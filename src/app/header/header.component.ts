import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Note } from '../models/note';
import { AuthService } from '../service/auth.service';
import { NoteService } from '../service/note.service';
import { RouterServiceService } from '../service/router-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  loggedIn: boolean = false;
  constructor(private authService: AuthService,
    private routerService: RouterServiceService) { }

  ngOnInit(): void {
  }
  
  isLoggedIn: boolean = false;

  logout() {
    this.authService.logout();
    this.loggedIn = this.authService.isLoggedIn;
    this.routerService.toLogin();
  }
  
  onLoggedIn($event: any) {
    this.isLoggedIn = !($event instanceof LoginComponent);
  }
  
  
}
