import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
  }

}
