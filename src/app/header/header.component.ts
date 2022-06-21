import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logined = false;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != null && document.cookie.length > 0) this.logined = true;
  }
  logout() {
    document.cookie = "";
    localStorage.clear();
  }
}
