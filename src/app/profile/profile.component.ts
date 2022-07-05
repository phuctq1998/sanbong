import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
    this.reloadData()
  }

  reloadData() {
    this.http.get('http://localhost:3000/user/profile', {
      withCredentials: true
    }).subscribe(data => {
      this.data = JSON.parse(JSON.stringify(data))['user'];
    })
  }
  update() {
    this.http.post<any>('http://localhost:3000/user/updateProfile', this.data, {
      withCredentials: true
    }).subscribe(data => {
      window.alert(data.message)
    })
  }
}
