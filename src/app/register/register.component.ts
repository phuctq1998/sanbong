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
      this.http.post<any>('http://localhost:3000/user/register', {
        ten: 'asdbas',
        password: '123567'
      }).subscribe(data => {
        console.log(data)
        if (data.status == "ok") {
          window.alert("Đăng ký thành công!");
          this.router.navigateByUrl('/login');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
