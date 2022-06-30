import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  listComment: any;
  ngOnInit(): void {
    this.reloadData()
  }
  submitComment() {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) {
      window.alert('Vui lòng đăng nhập để comment!');
      return;
    }
    let rating = 0;
    for (let index = 5; index != 0; index--) {
      if ((document.getElementById(index + '') as HTMLInputElement).checked) {
        rating = index;
        break;
      }
    }
    try {
      let content = document.getElementById("comment-content") as HTMLInputElement;
      this.http.post<any>('http://localhost:3000/user/createComment', {
        content: content.value,
        star: rating,
      }).subscribe(data => {
        console.log(data)
        if (data.code == "0") {
          this.reloadData()
        }
        else {
          window.alert("Thao tác thất bại!")
        }
      });
    } catch (error) {
      window.alert("Thao tác thất bại!")
      console.log(error);
    }
  }
  reloadData() {
    this.http.get('http://localhost:3000/user/showComment').subscribe(data => {
      console.log(data);
      this.listComment = JSON.parse(JSON.stringify(data))['comment'];
    })
  }
}
