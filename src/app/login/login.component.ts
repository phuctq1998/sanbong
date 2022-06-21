import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != null && document.cookie.length > 0) this.router.navigateByUrl('/search');
  }

  login() {
    try {
      let userName = document.getElementById("user_name") as HTMLInputElement;
      let password = document.getElementById("user_password") as HTMLInputElement;
      this.http.post<any>('http://localhost:3000/user/login', {
        userName: userName.value,
        password: password.value,
      }).subscribe(data => {
        console.log(data)
        if (data.code == "0") {
          window.alert("Đăng nhập thành công!");
          if (data.user.role == 'admin') this.router.navigateByUrl('/dashboard');
          else this.router.navigateByUrl('/search');
          document.cookie = "cookieIdUserName=" + data.cookieIdUserName;
          localStorage.setItem('role', data.user.role)
        }
        else {
          window.alert("Đăng nhập thất bại!")
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
