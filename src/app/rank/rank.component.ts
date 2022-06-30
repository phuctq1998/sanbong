import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  listData: any;

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
    this.reloadData();
  }
  reloadData() {
    this.http.get('http://localhost:3000/home/rankTeam').subscribe(data => {
      console.log(data);
      this.listData = JSON.parse(JSON.stringify(data))['user'];
    })
  }
}
