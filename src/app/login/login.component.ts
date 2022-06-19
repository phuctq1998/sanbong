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
  }

  login() {
    try {
      let ten = document.getElementById("user_name") as HTMLInputElement;
      let password = document.getElementById("user_password") as HTMLInputElement;
      this.http.post<any>('http://localhost:3000/user/login', {
        ten: ten.value,
        password: password.value,
      }).subscribe(data => {
        console.log(data)
        if (data.errMessage == "Ok") {
          window.alert("Đăng nhập thành công!");
          this.router.navigateByUrl('/dashboard');
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
