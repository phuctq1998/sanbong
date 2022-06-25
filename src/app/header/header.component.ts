import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logined = false;
  role : any;
  currentUrl='';
  constructor( private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != null && document.cookie.length > 0) this.logined = true;
    if (localStorage.getItem('role') != null) this.role = localStorage.getItem('role');
    this.currentUrl= this.router.url;
  }
  logout() {
    document.cookie = "";
    localStorage.clear();
  }
}
