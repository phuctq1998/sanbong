import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.component.html',
  styleUrls: ['./repassword.component.css']
})
export class RepasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
  }

}
