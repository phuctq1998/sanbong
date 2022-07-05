import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent implements OnInit {
  listSearch: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/login');
    let role = localStorage.getItem('role');
    if (role != 'admin') this.router.navigateByUrl('/search')
    this.listSearch = [];
    this.reloadData()
  }
  reloadData() {
    this.http.get('http://localhost:3000/admin/getAllPitch').subscribe(data => {
      console.log(data);
      this.listSearch = JSON.parse(JSON.stringify(data))['pitch'];
    })
  }
  update(item: any) {
    this.http.post<any>('http://localhost:3000/admin/updatePitch', {
      status: item.status,
      idPitch: item.id
    }).subscribe(data => {
      window.alert(data.message)
      if (data.code != 0) this.reloadData()
    })
  }
}
