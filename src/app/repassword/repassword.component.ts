import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.component.html',
  styleUrls: ['./repassword.component.css']
})
export class RepasswordComponent implements OnInit {
  oldPass = '';
  newPass = '';
  confirmNewPass = '';
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
  }
  changePassword() {
    if (this.newPass != this.confirmNewPass) {
      window.alert('Mật khẩu xác nhận không trùng khớp');
      return
    }
    if (this.newPass.length < 6) {
      window.alert('Mật khẩu phải dài hơn 6 ký tự');
      return
    }
    this.http.post<any>('http://localhost:3000/user/changePassword', {
      oldPassword: this.oldPass,
      password: this.newPass
    }, {
      withCredentials: true
    }).subscribe(data => {
      window.alert(data.message)
      if (data.code == 0) {
        this.router.navigateByUrl('/profile')
      }
    })
  }

}
