import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
  async sendForm() {
    console.log('sending');
    try {
      let ten = document.getElementById("ten") as HTMLInputElement;
      let phone = document.getElementById("phoneNumber") as HTMLInputElement;
      let password = document.getElementById("user_password") as HTMLInputElement;
      let confirmPassword = document.getElementById("user_password_confirmation") as HTMLInputElement;
      if (password.value !== confirmPassword.value) {
        window.alert("Xác nhận mật khẩu chưa khớp!");
        return
      }
      this.http.post<any>('http://localhost:3000/user/register', {
        userName: ten.value,
        phoneNumber: phone.value,
        password: password.value,
      }).subscribe(data => {
        console.log(data)
        if (data.code == 0) {
          window.alert("Đăng ký thành công!");
          this.router.navigateByUrl('/login');
        }
        else {
          window.alert("Đăng ký thất bại!")
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
