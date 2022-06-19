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
      let password = document.getElementById("user_password") as HTMLInputElement;
      this.http.post<any>('http://localhost:3000/user/register', {
        ten: ten.value,
        password: password.value,
      }).subscribe(data => {
        console.log(data)
        if (data.status == "ok") {
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
